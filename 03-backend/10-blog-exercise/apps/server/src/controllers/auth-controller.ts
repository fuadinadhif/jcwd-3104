import { Request, Response, NextFunction } from "express";
import { PrismaClient, Role } from "@prisma/client";
import { genSalt, hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { Resend } from "resend";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import handlebars from "handlebars";

import { registerSchema } from "../schemas/auth-schema";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, username, email, password, role } = registerSchema.parse(
      req.body
    );

    if (!name || !username || !email || !password) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: email, username: username },
    });

    if (existingUser) {
      res.status(400).json({ message: "Email or username has already taken" });
      return;
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
        role: role as Role,
      },
    });

    const confirmToken = crypto.randomBytes(20).toString("hex");
    const confirmationLink = `http://localhost:8000/api/v1/auth/confirm-email?token=${confirmToken}`;

    await prisma.confirmToken.create({
      data: {
        expiredDate: new Date(Date.now() + 1000 * 60 * 5),
        token: confirmToken,
        userId: newUser.id,
      },
    });

    const templateSource = await fs.readFile(
      "src/templates/email-confirmation-template.hbs"
    );
    const compiledTemplate = handlebars.compile(templateSource.toString());
    const htmlTemplate = compiledTemplate({
      name: name,
      link: confirmationLink,
    });
    const { data, error } = await resend.emails.send({
      from: "JustBlog <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to JustBlog",
      html: htmlTemplate,
    });

    if (error) {
      res.status(400).json({ error, data });
      return;
    }

    res.status(201).json({ ok: true, message: "New user added" });
  } catch (error) {
    next(error);
  }
}

export async function confirmEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.query.token;

    if (!token) {
      res.status(400).json({ message: "Token is required" });
      return;
    }

    const tokenRecord = await prisma.confirmToken.findFirst({
      where: { token: token.toString() },
    });

    if (
      !tokenRecord ||
      tokenRecord.used ||
      tokenRecord.expiredDate < new Date()
    ) {
      res.status(400).json({ message: "Invalid or expired token!" });
      return;
    }

    await prisma.confirmToken.update({
      where: { id: tokenRecord.id },
      data: { used: true },
    });

    await prisma.user.update({
      where: { id: tokenRecord.userId },
      data: { emailConfirmed: true },
    });

    res
      .status(200)
      .send(`<p>Email confirmed! Please go to the login page!</p>`);
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { emailOrUsername, password } = req.body;

    if (!emailOrUsername || !password) {
      res.status(400).json({ message: "Missing required fields!" });
      return;
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
      },
    });

    if (!existingUser) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    if (!existingUser.emailConfirmed) {
      res.status(400).json({ message: "Please complete your registration" });
      return;
    }

    const isValidPassword = await compare(password, existingUser.password);

    if (!isValidPassword) {
      res.status(401).json({ message: "Invalid credentials" });
    }

    const jwtPayload = {
      name: existingUser.name,
      email: existingUser.email,
      role: existingUser.role,
    };
    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: "1h",
    });

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
      })
      .status(200)
      .json({ ok: true, message: "Login success" });
  } catch (error) {
    next(error);
  }
}

export async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    req.user = null;
    res
      .clearCookie("accessToken")
      .status(200)
      .json({ message: "Logout successfully" });
  } catch (error) {
    next(error);
  }
}
