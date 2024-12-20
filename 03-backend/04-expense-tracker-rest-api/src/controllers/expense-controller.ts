import { Request, Response, NextFunction } from "express";

import { readData, writeData } from "../utils/io";
import { Expense } from "../types/expense";
import { formatDate } from "../utils/format-date";

export async function getAllExpense(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const expenses = await readData();

    if (!expenses) {
      res.status(404).json({ message: "Expenses data is nowhere to be found" });
      return;
    }

    res.status(200).json({ ok: true, data: expenses });
  } catch (error) {
    next(error);
  }
}

export async function getSingleExpense(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const expenses = await readData();

    if (!expenses) {
      res.status(404).json({ message: "Expenses data is nowhere to be found" });
      return;
    }

    const expenseTarget = expenses?.find((expense) => expense.id === +id);

    if (!expenseTarget) {
      res
        .status(404)
        .json({ message: `Expense with id: ${id} does not exist` });
      return;
    }

    res.status(200).json({ ok: true, data: expenseTarget });
  } catch (error) {
    next(error);
  }
}

export async function getTotalExpenseByCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { category } = req.query;

    if (!category) {
      res.status(400).json({ message: "Category is required" });
      return;
    }

    const expenses = await readData();

    if (!expenses) {
      res.status(404).json({ message: "Expenses data is nowhere to be found" });
      return;
    }

    const total = expenses
      .filter((expense) => {
        if (expense.category === category && expense.type === "expense") {
          return true;
        } else {
          return false;
        }
      })
      .reduce((sum, expense) => sum + expense.nominal, 0);

    res.status(200).json({ category, total });
  } catch (error) {
    next(error);
  }
}

export async function getTotalExpenseByDateRange(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      res.status(400).json({ message: "Start date and end date are required" });
      return;
    }

    const start = new Date(startDate as string);
    const end = new Date(endDate as string);

    const expenses = await readData();

    if (!expenses) {
      res.status(404).json({ message: "Expenses data is nowhere to be found" });
      return;
    }

    const total = expenses
      .filter((expense) => {
        const expenseDate = new Date(expense.date);
        return (
          expenseDate >= start &&
          expenseDate <= end &&
          expense.type === "expense"
        );
      })
      .reduce((sum, expense) => sum + expense.nominal, 0);

    res.status(200).json({ startDate, endDate, total });
  } catch (error) {
    next(error);
  }
}

export async function addExpense(
  req: Request<{}, {}, Expense>,
  res: Response,
  next: NextFunction
) {
  try {
    const { title, category, nominal, type } = req.body;

    if (!title || !category || !nominal || !type) {
      res.status(400).json({ message: "Missing required fields!" });
      return;
    }

    const expenses = await readData();

    if (!expenses) {
      res.status(404).json({ message: "Expenses data is nowhere to be found" });
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      category,
      date: formatDate(new Date()),
      nominal,
      type,
    };

    expenses.push(newExpense);
    await writeData(expenses);

    res.status(201).json({ ok: true, message: "Expense created" });
  } catch (error) {
    next(error);
  }
}

export async function editExpense(
  req: Request<{ id: string }, {}, Expense>,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const { title, category, nominal, type } = req.body;

    if (!title || !category || !nominal || !type) {
      res.status(400).json({ message: "Missing required fields!" });
      return;
    }

    const expenses = await readData();

    if (!expenses) {
      res.status(404).json({ message: "Expenses data is nowhere to be found" });
      return;
    }

    const expenseIndex = expenses.findIndex((expense) => expense.id === +id);

    if (expenseIndex === -1) {
      res
        .status(404)
        .json({ message: `Expense with id: ${id} does not exist` });
      return;
    }

    expenses[expenseIndex] = {
      ...expenses[expenseIndex],
      title,
      category,
      nominal,
      type,
    };

    await writeData(expenses);

    res.status(200).json({ ok: true, message: "Expense updated" });
  } catch (error) {
    next(error);
  }
}

export async function deleteExpense(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const expenses = await readData();

    if (!expenses) {
      res.status(404).json({ message: "Expenses data is nowhere to be found" });
      return;
    }

    const filteredData = expenses.filter((expense) => expense.id !== +id);

    console.log(expenses.length);
    console.log(filteredData.length);

    if (expenses.length <= filteredData.length) {
      res.status(400).json({
        message: `Failed to delete expense with id: ${id}. Make sure the id is correct`,
      });
      return;
    }

    await writeData(filteredData);

    res.status(200).json({ ok: true, message: "Expense deleted" });
  } catch (error) {
    next(error);
  }
}
