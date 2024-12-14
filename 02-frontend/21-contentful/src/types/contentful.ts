import { Document } from "@contentful/rich-text-types";

export interface ContentfulBlogPost {
  items: [
    {
      fields: {
        title: string;
        slug: string;
        author: string;
        content: Document;
        featuredImage: {
          sys: {
            id: string;
          };
        };
      };
    }
  ];
  includes: {
    Asset: [{ fields: { file: { url: string } }; sys: { id: string } }];
  };
}
