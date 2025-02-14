import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import prisma from "./configs/prisma";

import postRouter from "./routers/post-router";
import categoryRouter from "./routers/category-router";
import authRouter from "./routers/auth-router";
import roleRouter from "./routers/role-router";
import transactionRouter from "./routers/transaction-router";

import notFoundMiddleware from "./middlewares/not-found-middleware";
import errorMiddleware from "./middlewares/error-middleware";
import { verifyToken } from "./middlewares/auth-middleware";

const app = express();
const PORT = 8000;

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// Read body JSON property from request object
app.use(express.json());
// Read cookies property from req object
app.use(cookieParser());

/* -------------------------------------------------------------------------- */
/*                                 FOR TESTING                                */
/* -------------------------------------------------------------------------- */
// app.get("/testing", verifyToken, async (req, res) => {
//   const buyer = await prisma.user.findUnique({
//     where: { id: req.user.id },
//     include: { Wallet: true, Coupon: true, Point: true },
//   });

//   res.json({ data: buyer });
// });

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/roles", roleRouter);
app.use("/api/v1/transactions", transactionRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
