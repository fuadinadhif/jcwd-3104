import * as contentful from "contentful";

const client = contentful.createClient({
  space: "qqx0zvtrc2ma",
  environment: "master",
  accessToken: "sB0F-guB28wVDj0r6uv2k0PnqXhvjpWfDF0iEq_JMSo",
});

// Get both blog post and hero section entries
export async function getAllEntries() {
  try {
    const data = await client.getEntries();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Get entries for blog post only
export async function getAllBlogPost() {
  try {
    const data = await client.getEntries({
      content_type: "blogPost",
    });

    return data.items.map((post) => {
      let thumbnailUrl = post?.fields?.thumbnailImage?.fields?.file.url;

      if (!thumbnailUrl) {
        thumbnailUrl =
          "//media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
      }

      return {
        title: post.fields.title,
        slug: post.fields.slug,
        content: post.fields.content,
        thumbnailImage: `https:${thumbnailUrl}`,
        categories: post.fields.categories,
      };
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllHeroSection() {
  try {
    const data = await client.getEntries({
      content_type: "heroSection",
    });
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// One specific post by slug
export async function getSingleBlogPost() {}

// Some specific posts by title
export async function getPostsByTitle(keyword: string) {
  try {
    const res = await client.getEntries({
      content_type: "blogPost",
      "fields.title[match]": keyword,
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Some specific posts by category
export async function getPostsByCategory() {}
