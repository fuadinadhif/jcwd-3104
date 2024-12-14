import Image from "next/image";
import Link from "next/link";

interface Post {
  id: string;
  image: string;
  title: string;
  author: string;
  views: number;
  date: string;
  content: string;
}

async function getPosts() {
  try {
    const res = await fetch("http://localhost:8000/posts");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function PostsPage() {
  const posts = await getPosts();

  if (!posts)
    return (
      <p>
        Sorry the content you search for is not available right now. Please
        comeback later
      </p>
    );

  return (
    <>
      {posts.map((post: Post) => (
        <article key={post.id}>
          <div className="relative w-full h-24">
            <Image
              src={post.image}
              alt="Featured image"
              fill
              className="object-cover"
            />
          </div>
          <h2>{post.title}</h2>
          <address>Written by: {post.author}</address>
          <time dateTime={post.date}>{post.date}</time>
          <data value={post.views}>{post.views}</data>
          <p>
            <span>{post.content.slice(0, 210)}... </span>
            <Link href={`/posts/${post.id}`}>Read more</Link>
          </p>
        </article>
      ))}
    </>
  );
}
