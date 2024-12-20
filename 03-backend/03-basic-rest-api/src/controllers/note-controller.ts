import { Request, Response } from "express";

import { readData, writeData } from "../utils/io";

export async function getAllNotes(req: Request, res: Response) {
  try {
    const notes = await readData();
    res.status(200).json({ data: notes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
}

export async function addNote(req: Request, res: Response) {
  try {
    const notes = await readData();

    if (notes) {
      notes.push(req.body);
      await writeData(notes);
      res.status(201).json({ message: "Succesfully create new note" });
    }

    res.status(404).json({ message: "Notes not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
}

export async function updateNote(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const notes = await readData();

    if (!notes) {
      res.status(404).json({ message: "No notes found" });
      return;
    }

    const noteIndex = notes?.findIndex((note) => note.id === +id);

    if (noteIndex === -1) {
      res.status(404).json({ message: "Target note is not exist" });
      return;
    }

    notes[noteIndex] = { id: notes[noteIndex].id, notes: req.body.notes };
    await writeData(notes);

    res.status(200).json({ message: "Note updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
}

export async function deleteNote(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const notes = await readData();

    if (!notes) {
      res.status(404).json({ message: "No notes found!" });
      return;
    }

    const filteredData = notes.filter((note) => note.id !== +id);

    await writeData(filteredData);

    res.status(200).json({ message: "Note has been deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
}
