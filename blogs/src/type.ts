export type ArticleTypes = {
  id: number;
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: null; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

export type ArticleArrayType = {
  blog: ArticleTypes[];
};
