import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import { Expense } from "../types/expense";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, "../../data/expenses.json");

export async function readData(): Promise<Expense[] | null> {
  try {
    const rawData = await fs.readFile(DATA_FILE, "utf-8");
    const parsedData = JSON.parse(rawData);
    return parsedData;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function writeData(data: Expense[]) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(error);
  }
}
