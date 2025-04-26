import { useContext } from "react";
import { FavoriteBlogContext } from "../context/Store/StoreProvider";
import Blogs from "./Blogs";
import useFetchData from "../hooks/useFetchData";

export default function FavoriteBlogs() {
  const { favorites } = useContext(FavoriteBlogContext);

  const { articles } = useFetchData();

  const chosenBlogs = articles.filter((blog) => favorites.includes(blog.id));

  return (
    <div className="blog-container">
      <Blogs data={chosenBlogs} />
    </div>
  );
}
