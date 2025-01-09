import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, "../../data/expenses.json");

export async function readData() {
  try {
    const rawData = await fs.readFile(DATA_FILE, "utf-8");
    const parsedData = JSON.parse(rawData);
    return parsedData;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function writeData() {}
