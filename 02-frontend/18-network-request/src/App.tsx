import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  views: number;
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }

    getPosts();
  }, []);

  async function createPost() {
    const newPost = {
      id: String(Date.now()),
      title: title,
      author: author,
      content: content,
      views: 0,
    };

    await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
    });

    setPosts([...posts, newPost]);
  }

  async function deletePost(id: string) {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });

    setPosts((prev) => prev.filter((el) => el.id !== id));
  }

  return (
    <>
      <h1>Welcome To This Simple Blog</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost();
        }}
      >
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Input your name"
        />

        <label htmlFor="">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label htmlFor="">Content</label>
        <textarea
          name=""
          id=""
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {posts.map((el) => {
        return (
          <article key={el.id}>
            <h2>{el.title}</h2>
            <small>{el.author}</small>
            <span>{el.views}</span>
            <p>{el.content}</p>
            <button onClick={() => deletePost(el.id)}>Delete</button>
          </article>
        );
      })}
    </>
  );
}
