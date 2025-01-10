import express from "express";
import { Request, Response } from "express";

import pool from "./configs/database";

const app = express();
const PORT = 8000;

app.get("/api/v1/status-health", (req: Request, res: Response) => {
  res.status(200).json({ ok: true, statusHealth: "healthy" });
});

app.get("/api/v1/customers", async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const customers = await client.query("SELECT * FROM customers;");

    res.status(200).json({ ok: true, data: customers });
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
