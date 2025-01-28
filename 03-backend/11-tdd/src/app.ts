import express, { Application, Request, Response } from "express";

import userRoutes from "./routers/user-route";

const app: Application = express();
const PORT: number = 8000;

app.get("/api/v1", (req: Request, res: Response) => {
  res.status(200).json({ message: "API connect!" });
});

app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.info(`Server is listening to port: ${PORT}`);
});

export default app;
