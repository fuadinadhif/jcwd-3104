import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import fs from "node:fs/promises";

import { upload } from "./middlewares/upload-middleware";
import cloudinary from "./configs/cloudinary";

const app = express();
const PORT = 8000;
const prisma = new PrismaClient();

// Read body property from request object
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Add post
app.post(
  "/api/v1/posts",
  upload.single("image"),
  async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      console.log(req.file)

      const { title, excerpt, content, categoryIds } = req.body;

      if (
        !title ||
        !excerpt ||
        !content ||
        !req.file ||
        !categoryIds ||
        categoryIds.length <= 0
      ) {
        res.status(400).json({ message: "Missing required fields!" });
        return;
      }

      const cloudinaryData = await cloudinary.uploader.upload(req.file.path, {
        folder: "blog/images",
      });

      fs.unlink(req.file.path);

      await prisma.post.create({
        data: {
          title: title,
          excerpt: excerpt,
          content: content,
          image: cloudinaryData.secure_url,
          CategoryPost: {
            createMany: {
              data: categoryIds.map((category: number) => {
                return { categoryId: +category };
              }),
            },
          },
        },
      });

      res.status(201).json({ ok: true, message: "New post added" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "General error. Good luck!" });
    }
  }
);

// Get all post
app.get("/api/v1/posts", async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      include: { CategoryPost: { include: { Category: true } } },
    });

    const response = posts.map((post) => {
      return {
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        image: post.image,
        categories: post.CategoryPost.map((category) => category.Category.name),
      };
    });

    res.status(200).json({ ok: true, data: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

// Get single (detail) post
app.get("/api/v1/posts/:id", async (req: Request, res: Response) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: +req.params.id },
      include: { CategoryPost: { include: { Category: true } } },
    });

    const response = {
      id: post?.id,
      title: post?.title,
      content: post?.content,
      image: post?.image,
      categories: post?.CategoryPost.map((category) => category.Category.name),
      createdAt: post?.createdAt,
      updatedAt: post?.updatedAt,
    };

    res.status(200).json({ ok: true, data: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

// Add category
app.post("/api/v1/categories", async (req: Request, res: Response) => {
  try {
    await prisma.category.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
      },
    });

    res.status(200).json({ message: "New category added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

// Get all categories
app.get("/api/v1/categories", async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();

    res.status(200).json({ ok: true, data: categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
});

/* ------------------------------- PLAYGROUND ------------------------------- */
// Upload file
app.post(
  "/api/v1/uploads",
  upload.single("image"),
  async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        res.status(400).json({ message: "Missing image!" });
        return;
      }

      const cloudinaryData = await cloudinary.uploader.upload(req.file.path, {
        folder: "blog/images",
      });

      fs.unlink(req.file.path);

      res.status(201).json({
        ok: true,
        data: { body: req.body, file: req.file, cloudinary: cloudinaryData },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "General error. Good luck!" });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
