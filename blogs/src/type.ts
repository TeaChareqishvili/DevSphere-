import { ReactNode } from "react";

export type DevToArticleType = {
  canonical_url: string;
  collection_id: number | null;
  comments_count: number;
  cover_image: string;
  created_at: string;
  crossposted_at: string | null;
  description: string;
  edited_at: string | null;
  flare_tag: {
    name: string;
    bg_color_hex: string;
    text_color_hex: string;
  };
  id: number;
  language: string;
  last_comment_at: string;
  organization: {
    name: string;
    username: string;
    slug: string;
    path: string;
  };
  positive_reactions_count: number;
  public_reactions_count: number;
  published_at: string;
  published_timestamp: string;
  readable_publish_date: string;
  reading_time_minutes: number;
  slug: string;
  social_image: string;
  subform_id: number;
  tag_list: string[];
  tags: string;
  title: string;
  type_of: string;
  url: string;
};

export type ArticleArrayType = {
  data: DevToArticleType[];
};

export type FavoriteBlogsTypes = {
  favorites: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
};

export type ProviderProps = {
  children: ReactNode;
};

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
  headerTheme: string;
};
