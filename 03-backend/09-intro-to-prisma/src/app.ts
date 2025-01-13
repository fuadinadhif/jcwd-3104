import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = 8000;
const prisma = new PrismaClient();

app.use(express.json());

app.get("/api/v1", (req: Request, res: Response) => {
  res.status(200).send("<h1>Welcome!</h1>");
});

/* --------------------------------- BRANCH --------------------------------- */
// Create Branch
app.post("/api/v1/branches", async (req: Request, res: Response) => {
  try {
    await prisma.branch.create({
      data: { name: req.body.name, location: req.body.location },
    });

    res.status(200).json({ ok: true, message: "New branch added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

// Read All Branch Data - /api/v1/branches?page=3
app.get("/api/v1/branches", async (req: Request, res: Response) => {
  try {
    const branches = await prisma.branch.findMany({
      skip: ((req.query.page as unknown as number) - 1) * 2,
      take: 2,
    });

    res.status(200).json({
      ok: true,
      data: branches,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

// Search Branch
app.get("/api/v1/branches/search", async (req: Request, res: Response) => {
  try {
    const result = await prisma.branch.findMany({
      where: { name: { contains: req.query.keyword as string } },
    });

    if (result.length <= 0) {
      res.status(404).json({ message: "Not found" });
      return;
    }

    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

// Search With Multiple Condition - localhost:8000/api/v1/branches/filter?keyword=B&location=Jawa%20Barat
app.get("/api/v1/branches/filter", async (req: Request, res: Response) => {
  try {
    const result = await prisma.branch.findMany({
      where: {
        name: { contains: req.query.keyword as string },
        AND: [{ location: { equals: req.query.location as string } }],
      },
    });

    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

// Get Branch Statistic
app.get("/api/v1/branches/stats", async (req: Request, res: Response) => {
  try {
    const result = await prisma.branch.aggregate({
      _count: {
        _all: true,
        name: true,
        location: true,
      },
    });

    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

// Read Single Branch Data
app.get("/api/v1/branches/:id", async (req: Request, res: Response) => {
  try {
    const branch = await prisma.branch.findUnique({
      where: { id: +req.params.id },
    });

    if (!branch) {
      res
        .status(404)
        .json({ message: "The branch you were looking for does not exists" });
      return;
    }

    res.status(200).json({ ok: true, data: branch });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

/* --------------------------------- MANAGER -------------------------------- */
app.post("/api/v1/managers", async (req: Request, res: Response) => {
  try {
    await prisma.manager.create({
      data: { name: req.body.name, branchId: +req.body.branchId },
    });

    res.status(200).json({ ok: true, message: "New manager created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
