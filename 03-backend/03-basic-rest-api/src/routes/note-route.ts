import express from "express";
import {
  addNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/note-controller";

const router = express.Router();

router.route("/notes").get(getAllNotes).post(addNote);
router.route("/notes/:id").put(updateNote).delete(deleteNote);

export default router;
