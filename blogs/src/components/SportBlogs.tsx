import useFetchSportArticles from "../hooks/useFetchSportData";
import Blogs from "./Blogs";

export default function SportBlogs() {
  const { articles } = useFetchSportArticles();

  return (
    <div className="blog-container">
      <Blogs blog={articles} />
    </div>
  );
}
