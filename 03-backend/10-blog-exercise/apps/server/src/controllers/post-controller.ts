import { Request, Response, NextFunction } from "express";
import fs from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

import cloudinary from "../configs/cloudinary";
import { publishPost } from "../crons/post-cron";
import { logger } from "../middlewares/error-middleware";
// import redis from "../configs/redis";

const prisma = new PrismaClient();

export async function createPost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { title, excerpt, content, categoryIds, publishedDate } = req.body;

    if (
      !title ||
      !excerpt ||
      !content ||
      !req.file ||
      !categoryIds ||
      categoryIds.length <= 0
    ) {
      const errorMessage = "Missing required fields";
      logger(errorMessage);
      res.status(400).json({ message: errorMessage });
      return;
    }

    const cloudinaryData = await cloudinary.uploader.upload(req.file.path, {
      folder: "blog/images",
    });

    fs.unlink(req.file.path);

    const newPost = await prisma.post.create({
      data: {
        title: title,
        excerpt: excerpt,
        content: content,
        image: cloudinaryData.secure_url,
        publishedDate: new Date(publishedDate),
        CategoryPost: {
          createMany: {
            data: categoryIds.map((category: number) => {
              return { categoryId: +category };
            }),
          },
        },
      },
    });

    if (new Date(publishedDate) < new Date()) {
      await prisma.post.update({
        where: { id: newPost.id },
        data: { published: true },
      });
    } else {
      publishPost(newPost.id, new Date(publishedDate));
    }

    // await redis.del("allPosts");

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
    // const cachedPosts = await redis.get("allPosts");

    // if (cachedPosts) {
    //   res
    //     .status(200)
    //     .json({ ok: true, data: JSON.parse(cachedPosts), cached: true });
    //   return;
    // }

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

    // await redis.setex("allPosts", 3600, JSON.stringify(response));

    res.status(200).json({ ok: true, data: response, cached: false });
  } catch (error) {
    next(error);
  }
}

export async function getPublishedPosts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const posts = await prisma.post.findMany({
    where: { published: true },
  });
}

export async function getDraftPosts() {}

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
