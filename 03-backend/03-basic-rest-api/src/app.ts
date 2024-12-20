import express from "express";

import noteRoutes from "./routes/note-route";

const app = express();

// Middleware to enable us to read request body
app.use(express.json());

// Welcoming endpoint
app.get("/api/v1", (req, res) => {
  res.status(200).send("<h1>Welcome only</h1>");
});

app.use("/api/v1", noteRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is on! On port: ${PORT}`);
});
