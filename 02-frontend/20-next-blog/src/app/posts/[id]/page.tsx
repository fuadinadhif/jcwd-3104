import Image from "next/image";

async function getSinglePost(id: string) {
  try {
    const res = await fetch(`http://localhost:8000/posts/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function PostsIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = await getSinglePost(id);

  if (!post) return <p>No Post Found</p>;

  return (
    <>
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
      <p>{post.content}</p>
    </>
  );
}
