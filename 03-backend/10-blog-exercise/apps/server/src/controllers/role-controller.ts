import { Request, Response, NextFunction } from "express";
import { Role } from "@prisma/client";

export async function getRole(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ ok: true, data: Object.values(Role) });
  } catch (error) {
    next(error);
  }
}
