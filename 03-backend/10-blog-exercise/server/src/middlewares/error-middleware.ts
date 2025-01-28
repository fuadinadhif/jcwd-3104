import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import fs from "node:fs/promises";

export async function logger(errorMessage: string) {
  try {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${errorMessage}\n`;

    await fs.appendFile("logs/error.log", logMessage, "utf-8");
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error writing the log: ${error.message}`);
    }
  }
}

export default function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);

  logger(error.message);

  if (error instanceof z.ZodError) {
    res.status(400).json({ message: error.errors });
    return;
  }

  res.status(500).json({ message: "General error. Good luck!" });
}
