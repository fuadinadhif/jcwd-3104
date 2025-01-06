export interface ContentfulPost {
  fields: {
    title: string;
    categories: { fields: { name: string } }[];
  };
}

export interface ContentfulCategory {
  fields: {
    description: string;
    name: string;
    slug: string;
  };
}
