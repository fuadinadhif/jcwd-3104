import "dotenv/config";

import express from "express";
import prisma from "./configs/prisma";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.status(200).json({ message: "API Connected!" });
});

app.get("/api/v1/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json({ ok: true, data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

app.post("/api/v1/users", async (req, res) => {
  try {
    const { name, email } = req.body;

    await prisma.user.create({
      data: { name: name, email: email },
    });

    res.status(201).json({ ok: true, message: "User created!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

app.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});

export default app;
