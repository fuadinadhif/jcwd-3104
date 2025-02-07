import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await prisma.category.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
      },
    });

    res.status(200).json({ message: "New category added" });
  } catch (error) {
    next(error);
  }
}

export async function getAllCategories(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const categories = await prisma.category.findMany();

    res.status(200).json({ ok: true, data: categories });
  } catch (error) {
    next(error);
  }
}
