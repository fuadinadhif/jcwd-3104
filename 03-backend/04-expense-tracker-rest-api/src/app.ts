import express from "express";

import expenseRouters from "./routers/expense-router";
import notFoundMiddleware from "./middlewares/not-found-middleware";
import errorMiddleware from "./middlewares/error-middleware";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/api/v1/expenses", expenseRouters);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
