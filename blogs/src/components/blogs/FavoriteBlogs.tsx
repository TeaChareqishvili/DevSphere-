import { useContext } from "react";
import { FavoriteBlogContext } from "../../context/Store/StoreProvider";
import Blogs from "./Blogs";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../Loader";

export default function FavoriteBlogs() {
  const { favorites } = useContext(FavoriteBlogContext);

  const { articles, loading } = useFetchData();

  const chosenBlogs = articles.filter((blog) => favorites.includes(blog.id));

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="blog-container">
      {chosenBlogs.length > 0 ? (
        <Blogs data={chosenBlogs} />
      ) : (
        <div className="no-blogs">
          <h1> Oops, no blogs to show right now!</h1>
        </div>
      )}
    </div>
  );
}
