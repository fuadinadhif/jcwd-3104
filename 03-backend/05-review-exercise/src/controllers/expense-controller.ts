import { NextFunction, Request, Response } from "express";

import { readData } from "../utils/io";

export async function getAllExpense(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const expenses = await readData();

    throw new Error();

    if (!expenses) {
      res.status(404).json({ message: "Expenses is nowhere to be found" });
      return;
    }

    res.status(200).json({ ok: true, data: expenses });
  } catch (error) {
    next(error);
  }
}

export async function getSingleExpense(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    next(error);
  }
}
