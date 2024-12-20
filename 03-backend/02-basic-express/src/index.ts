import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const app = express();
const PORT = 8000;

app.get("/api/v1", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to my API!" });
});

app.get("/api/v1/data", async (req: Request, res: Response) => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const DATA_FILE = path.join(__dirname, "../data/data.json");

    const rawData = await fs.readFile(DATA_FILE, "utf-8");
    const parsedData = JSON.parse(rawData);

    res.status(200).json({ data: parsedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
