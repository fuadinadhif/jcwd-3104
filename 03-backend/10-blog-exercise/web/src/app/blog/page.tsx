import Image from "next/image";

import { AllPost } from "@/types/blog";

export default async function BlogPage() {
  const response = await fetch("http://localhost:8000/api/v1/posts");
  const posts: AllPost = await response.json();

  return (
    <section className="grid grid-cols-1 gap-5">
      {posts.data.map((post, index) => {
        return (
          <article key={index}>
            <h2>{post.title}</h2>
            <div className="relative h-32 w-full">
              <Image
                src={post.image}
                alt="Thumbnail image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-2">
              {post.categories.map((category, index) => {
                return (
                  <span key={index} className="border border-white p-2">
                    {category}
                  </span>
                );
              })}
            </div>
          </article>
        );
      })}
    </section>
  );
}
