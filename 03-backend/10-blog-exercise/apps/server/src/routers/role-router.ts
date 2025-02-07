import express from "express";
import { getRole } from "../controllers/role-controller";

const router = express.Router();

router.route("/").get(getRole);
// router.get("/", getRole).post("/", createRole);

export default router;
