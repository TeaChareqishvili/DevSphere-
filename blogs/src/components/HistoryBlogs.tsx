import useFetchHistoryArticles from "../hooks/useFetchHistoryData";
import Blogs from "./Blogs";

export default function HistoryBlogs() {
  const { articles } = useFetchHistoryArticles();

  console.log(articles, "history");
  return (
    <div className="blog-container">
      <Blogs blog={articles} />
    </div>
  );
}
