import * as contentful from "contentful";

const client = contentful.createClient({
  space: "qqx0zvtrc2ma",
  environment: "master",
  accessToken: "sB0F-guB28wVDj0r6uv2k0PnqXhvjpWfDF0iEq_JMSo",
});

export async function getContentfulData({
  contentType,
  query,
}: {
  contentType: string;
  query?: string;
}) {
  try {
    const data = await client.getEntries({
      content_type: contentType,
      query: query,
    });

    return data.items;
  } catch (error) {
    console.error(error);
    return null;
  }
}
