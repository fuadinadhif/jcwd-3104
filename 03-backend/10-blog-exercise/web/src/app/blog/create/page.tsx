"use client";

import { useEffect, useState } from "react";

import { AllCategories } from "@/types/blog";

export default function CreatePage() {
  const [categories, setCategories] = useState<AllCategories>();
  const [formPost, setFormPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
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
      await fetch("http://localhost:8000/api/v1/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPost),
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={formPost.title}
            onChange={(e) =>
              setFormPost((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
          />
        </div>

        <div>
          <label htmlFor="excerpt">Excerpt</label>
          <input
            type="text"
            id="excerpt"
            value={formPost.excerpt}
            onChange={(e) =>
              setFormPost((prev) => {
                return { ...prev, excerpt: e.target.value };
              })
            }
          />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={formPost.content}
            onChange={(e) =>
              setFormPost((prev) => {
                return { ...prev, content: e.target.value };
              })
            }
          />
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            value={formPost.image}
            onChange={(e) =>
              setFormPost((prev) => {
                return { ...prev, image: e.target.value };
              })
            }
          />
        </div>

        <div>
          {categories?.data?.map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                name=""
                id={`cat-${item.id}`}
                checked={formPost.categoryIds.includes(item.id)}
              />
              <label htmlFor={`cat-${item.id}`}>{item.name}</label>
            </div>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
