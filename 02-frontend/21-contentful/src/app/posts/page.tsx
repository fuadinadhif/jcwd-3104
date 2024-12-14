import Image from "next/image";
import Link from "next/link";

import { ContentfulBlogPost } from "@/types/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

async function getPosts() {
  try {
    const res = await fetch(
      "https://cdn.contentful.com/spaces/w7ymtc7ledyb/environments/master/entries?access_token=WqoyRnI7t95hDOoD0H-BuxG-KawtL0XRFJTdc35-WtU&content_type=blogPost"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function mapBlogPost(data: ContentfulBlogPost) {
  const posts = data.items.map((item) => {
    const featuredImage = data.includes.Asset.find(
      (asset) => asset.sys.id === item.fields.featuredImage.sys.id
    );

    return {
      title: item.fields.title,
      slug: item.fields.slug,
      content: item.fields.content,
      featuredImage: `https:${featuredImage?.fields.file.url}`,
    };
  });

  return posts;
}

export default async function PostsPage() {
  const contentfulData = await getPosts();
  const posts = mapBlogPost(contentfulData);

  console.log(posts);

  return (
    <section>
      {posts.map((el) => (
        <Link href={`/posts/${el.slug}`} key={el.slug}>
          <article>
            <div className="relative w-full h-32">
              <Image
                src={el.featuredImage}
                alt="Featured image"
                fill
                className="object-cover"
              />
            </div>
            <h2>{el.title}</h2>

            {documentToReactComponents(el.content, {
              renderNode: {
                [BLOCKS.HEADING_2]: (node, children) => {
                  return <h2 className="text-xl font-semibold">{children}</h2>;
                },
                [BLOCKS.PARAGRAPH]: (node, children) => {
                  return <p>{children}</p>;
                },
              },
            })}
          </article>
        </Link>
      ))}
    </section>
  );
}
