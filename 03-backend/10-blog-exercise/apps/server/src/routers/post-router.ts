import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
} from "../controllers/post-controller";
import { upload } from "../middlewares/upload-middleware";

const router = express.Router();

router.route("/").get(getAllPosts).post(upload.single("image"), createPost);
router.route("/:id").get(getSinglePost);

export default router;
