"use client";

import { useEffect, useState } from "react";

import { AllCategories } from "@/types/blog";

export default function CreatePage() {
  const [categories, setCategories] = useState<AllCategories>();
  const [formPost, setFormPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: null as File | null,
    categoryIds: [] as number[],
  });

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch("http://localhost:8000/api/v1/categories");
        const data: AllCategories = await response.json();

        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    }

    getCategories();
  }, []);

  async function handleSubmit() {
    try {
      const formData = new FormData();

      formData.append("title", formPost.title);
      formData.append("excerpt", formPost.excerpt);
      formData.append("content", formPost.content);
      if (formPost.image) {
        formData.append("image", formPost.image);
      }
      formPost.categoryIds.forEach((id) => {
        formData.append("categoryIds[]", String(id));
      });

      await fetch("http://localhost:8000/api/v1/posts", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          setFormPost({
            title: "",
            excerpt: "",
            content: "",
            image: null,
            categoryIds: [],
          });
        }}
        className="w-fit mx-auto flex gap-2 flex-col"
      >
        <div className="grid grid-cols-[75px_1fr]">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={formPost.title}
            onChange={(e) =>
              setFormPost((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>

        <div className="grid grid-cols-[75px_1fr]">
          <label htmlFor="excerpt">Excerpt</label>
          <input
            type="text"
            id="excerpt"
            value={formPost.excerpt}
            onChange={(e) =>
              setFormPost((prev) => ({ ...prev, excerpt: e.target.value }))
            }
          />
        </div>

        <div className="grid grid-cols-[75px_1fr]">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={formPost.content}
            onChange={(e) =>
              setFormPost((prev) => ({ ...prev, content: e.target.value }))
            }
          />
        </div>

        <div className="grid grid-cols-[75px_1fr]">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setFormPost((prev) => ({ ...prev, image: file }));
            }}
          />
        </div>

        <div>
          <h2>Categories</h2>
          {categories?.data?.map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                name=""
                id={`category-${item.id}`}
                checked={formPost.categoryIds.includes(item.id)}
                onChange={() =>
                  setFormPost((prev) => ({
                    ...prev,
                    categoryIds: formPost.categoryIds.includes(item.id)
                      ? prev.categoryIds.filter(
                          (category) => category !== item.id
                        )
                      : [...prev.categoryIds, item.id],
                  }))
                }
              />
              <label htmlFor={`category-${item.id}`}>{item.name}</label>
            </div>
          ))}
        </div>

        <button type="submit" className="border">
          Submit
        </button>
      </form>
    </section>
  );
}
