import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllUser(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json({ ok: true, data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General Error. Good luck!" });
  }
}
