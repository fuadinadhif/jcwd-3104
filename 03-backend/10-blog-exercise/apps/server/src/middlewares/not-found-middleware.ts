import { Request, Response, NextFunction } from "express";

export default function notFoundMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res
    .status(404)
    .json({ message: "The route you are looking for does not exist" });
}
