import express from "express";
import {
  addExpense,
  deleteExpense,
  editExpense,
  getAllExpense,
  getSingleExpense,
  getTotalExpenseByCategory,
  getTotalExpenseByDateRange,
} from "../controllers/expense-controller";

const router = express.Router();

router.route("/").get(getAllExpense).post(addExpense);
router.route("/total-by-category").get(getTotalExpenseByCategory);
router.route("/total-by-date").get(getTotalExpenseByDateRange);
router
  .route("/:id")
  .get(getSingleExpense)
  .put(editExpense)
  .delete(deleteExpense);

export default router;
