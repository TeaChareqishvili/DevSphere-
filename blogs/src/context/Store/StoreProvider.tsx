import { createContext, useState } from "react";

import { FavoriteBlogsTypes, ProviderProps } from "../../type";

export const FavoriteBlogContext = createContext<FavoriteBlogsTypes>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export default function FavoriteBlogProvider({ children }: ProviderProps) {
  const [favorite, setFavorite] = useState<number[]>([]);

  const addFavoriteBlog = (id: number) => {
    setFavorite((currentBlog) => [...currentBlog, id]);
  };

  const removeFavorite = (id: number) => {
    setFavorite((currentId) => currentId.filter((blogId) => blogId !== id));
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
