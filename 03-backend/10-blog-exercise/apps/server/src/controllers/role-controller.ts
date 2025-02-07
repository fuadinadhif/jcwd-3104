import { Request, Response, NextFunction } from "express";
import { Role } from "@prisma/client";

export async function getRole(req: Request, res: Response, next: NextFunction) {
  try {
    const roles = Object.values(Role).filter((item) => item !== "ADMIN");
    res.status(200).json({ ok: true, data: roles });
  } catch (error) {
    next(error);
  }
}
