export interface AllPost {
  ok: boolean;
  data: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    categories: string[];
  }[];
}

export interface AllCategories {
  ok: boolean;
  data: {
    id: number;
    name: string;
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}
