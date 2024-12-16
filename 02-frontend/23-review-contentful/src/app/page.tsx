import {
  // getAllEntries,
  // getAllBlogPost,
  // getAllHeroSection,
  getPostsByTitle,
} from "@/utils/contentful-data";

export default async function HomePage() {
  // const entries = await getAllEntries();
  // console.log(entries);

  // const posts = await getAllBlogPost();
  // console.log(posts);

  // const hero = await getAllHeroSection()
  // console.log(hero)

  const result = await getPostsByTitle("mon");
  console.log(result);
  return <h1>Welcome to JCWD-3104</h1>;
}
