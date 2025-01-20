import { Request, Response, NextFunction } from "express";
import fs from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

import cloudinary from "../configs/cloudinary";

const prisma = new PrismaClient();

export async function createPost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
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
    next(error);
  }
}

export async function getAllPosts(
  req: Request,
  res: Response,
  next: NextFunction
) {
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
    next(error);
  }
}

export async function getSinglePost(
  req: Request,
  res: Response,
  next: NextFunction
) {
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
    next(error);
  }
}
