export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://cdn.contentful.com/spaces/w7ymtc7ledyb/environments/master/entries?access_token=WqoyRnI7t95hDOoD0H-BuxG-KawtL0XRFJTdc35-WtU&content_type=blogPost"
    );
    const data = await res.json();

    return data.items.map((el: { fields: { slug: string } }) => {
      return {
        slug: el.fields.slug,
      };
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getSinglePost(slug: string) {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/w7ymtc7ledyb/environments/master/entries?access_token=WqoyRnI7t95hDOoD0H-BuxG-KawtL0XRFJTdc35-WtU&content_type=blogPost&fields.slug=${slug}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function DynamicSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getSinglePost(slug);

  console.log(post);

  return (
    <section>
      <h2>See you later</h2>
    </section>
  );
}
