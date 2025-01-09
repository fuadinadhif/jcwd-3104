import { Request, Response, NextFunction } from "express";

export default function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);
  res.status(500).json({ message: "General Error. Good luck!" });
}
