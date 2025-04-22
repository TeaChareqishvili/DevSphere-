import { createContext, useState } from "react";
import { ProviderProps } from "../Theme/ThemeProvider";

type FavoriteBlogsTypes = {
  id: number[];
  toggleHeart: (id: number) => void;
};

export const FavoriteBlogContext = createContext<FavoriteBlogsTypes>({
  id: [],
  toggleHeart: () => {},
});

export default function FavoriteBlogProvider({ children }: ProviderProps) {
  const [favorite, setFavorite] = useState<number[]>([]);

  const toggleFavoriteBlog = (id: number) => {
    setFavorite((currentBlog) => [...currentBlog, id]);
  };

  const value = {
    id: favorite,
    toggleHeart: toggleFavoriteBlog,
  };
  return (
    <FavoriteBlogContext.Provider value={value}>
      {children}
    </FavoriteBlogContext.Provider>
  );
}
