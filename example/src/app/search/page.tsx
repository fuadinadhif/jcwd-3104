"use client";

import { ContentfulPost } from "@/types/contentful";
import { getContentfulData } from "@/utils/get-contentful-data";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [results, setResults] = useState<ContentfulPost[]>([]);

  useEffect(() => {
    async function fetchData() {
      const results = (await getContentfulData({
        contentType: "bumpBlogPost",
        query: searchQuery!,
      })) as unknown as ContentfulPost[];

      setResults(results);
    }

    fetchData();
  }, [searchQuery]);

  return (
    <section>
      <h2>RESULT FOR: {searchQuery?.toUpperCase()}</h2>
      <div>
        {results?.map((post, index) => (
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
    </section>
  );
}
