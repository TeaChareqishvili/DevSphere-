import { createContext, useState } from "react";
import { ProviderProps } from "../Theme/ThemeProvider";

type FavoriteBlogsTypes = {
  favorites: string[];
  addFavorite: (url: string) => void;
  removeFavorite: (url: string) => void;
};

export const FavoriteBlogContext = createContext<FavoriteBlogsTypes>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export default function FavoriteBlogProvider({ children }: ProviderProps) {
  const [favorite, setFavorite] = useState<string[]>([]);

  const addFavoriteBlog = (url: string) => {
    setFavorite((currentBlog) => [...currentBlog, url]);
  };

  const removeFavorite = (url: string) => {
    setFavorite((currentUrl) =>
      currentUrl.filter((blogUrl) => blogUrl !== url)
    );
  };

  const value = {
    favorites: favorite,
    addFavorite: addFavoriteBlog,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoriteBlogContext.Provider value={value}>
      {children}
    </FavoriteBlogContext.Provider>
  );
}
