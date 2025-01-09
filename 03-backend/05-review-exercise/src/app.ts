import express from "express";

import expenseRouter from "./routers/expense-router";
import notFoundMiddleware from "./middlewares/not-found-middleware";
import errorMiddleware from "./middlewares/error-middleware";

const app = express();
const PORT = 8000;

app.get("/api/v1", (req, res) => {
  res.status(200).send("<h1>Welcome to My Expense Tracker</h1>");
});

app.use("/api/v1/expenses", expenseRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
