"use client";

import { useEffect, useState } from "react";

import { ContentfulCategory, ContentfulPost } from "@/types/contentful";
import { getContentfulData } from "@/utils/get-contentful-data";

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<ContentfulPost[]>();
  const [posts, setPosts] = useState<ContentfulPost[]>();
  const [categories, setCategories] = useState<ContentfulCategory[]>();

  useEffect(() => {
    async function fetchData() {
      const posts = (await getContentfulData({
        contentType: "bumpBlogPost",
      })) as unknown as ContentfulPost[];
      const categories = (await getContentfulData({
        contentType: "bumpBlogCategory",
      })) as unknown as ContentfulCategory[];

      setAllPosts(posts);
      setPosts(posts);
      setCategories(categories);
    }

    fetchData();
  }, []);

  function getPostsByCategory(selectedCategory: string) {
    const filteredPosts = allPosts?.filter((post) =>
      post.fields.categories.some(
        (category) => category.fields.name === selectedCategory
      )
    );

    setPosts(filteredPosts);
  }

  return (
    <section className="grid grid-cols-[1fr_min-content]">
      <div>
        <h2>BLOG POSTS</h2>
        <div>
          {posts?.map((post, index) => (
            <article key={index} className="mb-5">
              <h3>{post.fields.title}</h3>
              {post.fields.categories.map((category, index) => (
                <span key={index} className="border p-2">
                  {category.fields.name}
                </span>
              ))}
            </article>
          ))}
        </div>
      </div>

      <aside>
        <h2>CATEGORIES</h2>
        {categories?.map((category, index) => (
          <button
            key={index}
            className="border"
            onClick={() => {
              getPostsByCategory(category.fields.name);
            }}
          >
            {category.fields.name}
          </button>
        ))}
      </aside>
    </section>
  );
}
