import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
} from "../controllers/post-controller";
import { upload } from "../middlewares/upload-middleware";
import { roleGuard } from "../middlewares/auth-middleware";

const router = express.Router();

router
  .route("/")
  .get(getAllPosts)
  .post(roleGuard("AUTHOR"), upload.single("image"), createPost);
router.route("/:id").get(getSinglePost);

export default router;
