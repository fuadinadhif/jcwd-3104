import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

interface Note {
  id: number;
  notes: string;
}

const __filename = fileURLToPath(import.meta.url); // Get file name
// console.log(__filename);
const __dirname = path.dirname(__filename); // Get directory name only
// console.log(__dirname);
const DATA_FILE = path.join(__dirname, "../../data/data.json"); // Create data.json file path
// console.log(DATA_FILE);

export async function readData(): Promise<Note[] | null> {
  try {
    const rawNotes = await fs.readFile(DATA_FILE, "utf-8"); // Get the notes from data.json file
    const notes = JSON.parse(rawNotes); // Convert JSON to JS object

    return notes;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function writeData(data: Note[]) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 1));
  } catch (error) {
    console.error(error);
  }
}
