import { getAllBlogPost } from "@/utils/contentful-data";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import Image from "next/image";

export default async function BlogPage() {
  const posts = await getAllBlogPost();
  return (
    <>
      <h1>Blog Post</h1>

      <div>
        {posts?.map((item) => {
          return (
            <article key={item.slug}>
              <div className="relative w-full h-32">
                <Image
                  src={item.thumbnailImage}
                  alt="Thumbnail image"
                  fill
                  className="object-cover"
                />
              </div>
              <h2>{item.title}</h2>
              {documentToReactComponents(item.content, {
                renderNode: {
                  [BLOCKS.HEADING_2]: (node, children) => {
                    return <h2 className="text-3xl font-bold">{children}</h2>;
                  },
                  [BLOCKS.PARAGRAPH]: (node, children) => {
                    return <p className="text-red-500">{children}</p>;
                  },
                },
              })}
            </article>
          );
        })}
      </div>
    </>
  );
}
