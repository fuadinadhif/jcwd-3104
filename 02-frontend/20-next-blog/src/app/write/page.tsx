"use client";

import { useState } from "react";
import { z, ZodError } from "zod";

interface Errors {
  title?: string;
  author?: string;
  image?: string;
  content?: string;
}

const postSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long"),
  author: z.string().min(3, "Author must be at least 3 characters long"),
  content: z
    .string()
    .max(10, "Content cannot be more than 10 characters")
    .min(5, "Content must be at least 5 characters long"),
  image: z
    .instanceof(File, { message: "Please upload a valid image file" })
    .refine(
      (file) => file.size > 100,
      "The uploaded file image size must be at least 100 Byte"
    ),
});

export default function PostsPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  async function uploadToCloudinary() {
    const formData = new FormData();
    formData.append("file", image!);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
    );

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.error(error);
    }
  }

  async function addPost() {
    setErrors({});

    try {
      postSchema.parse({
        title: title,
        image: image,
        content: content,
        author: author,
      });

      const imageUrl = await uploadToCloudinary();

      const postData = {
        id: String(Date.now()),
        title: title,
        author: author,
        image: imageUrl,
        content: content,
        views: 0,
        date: new Date(),
      };

      await fetch("http://localhost:8000/posts", {
        method: "POST",
        body: JSON.stringify(postData),
      });
    } catch (error) {
      console.error(error);

      if (error instanceof ZodError) {
        const validationErrors: Errors = {};

        error.errors.forEach((err) => {
          if (err.path[0] === "title") {
            validationErrors.title = err.message;
          }
          if (err.path[0] === "author") {
            validationErrors.author = err.message;
          }
          if (err.path[0] === "image") {
            validationErrors.image = err.message;
          }
          if (err.path[0] === "content") {
            validationErrors.content = err.message;
          }
        });

        setErrors(validationErrors);
      }
    }
  }

  return (
    <div className="flex justify-center">
      <form
        className="grid"
        onSubmit={(e) => {
          e.preventDefault();
          addPost();
        }}
      >
        <div className="grid">
          <label htmlFor="title">Title</label>
          <input
            className="border"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <small className="text-red-500">{errors.title}</small>
          )}
        </div>

        <div className="grid">
          <label htmlFor="author">Author</label>
          <input
            className="border"
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && (
            <small className="text-red-500">{errors.author}</small>
          )}
        </div>

        <div className="grid">
          <label htmlFor="featuredImage">Featured Image</label>
          <input
            accept="image/*"
            className="border"
            type="file"
            id="featuredImage"
            onChange={(e) => setImage(e.target.files![0])}
          />
          {errors.image && (
            <small className="text-red-500">{errors.image}</small>
          )}
        </div>

        <div className="grid">
          <label htmlFor="content">Content</label>
          <textarea
            className="border"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {errors.content && (
            <small className="text-red-500">{errors.content}</small>
          )}
        </div>

        <button type="submit" aria-label="Button for submitting the form">
          Submit
        </button>
      </form>
    </div>
  );
}
