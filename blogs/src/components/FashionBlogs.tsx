import useFetchFashionArticles from "../hooks/useFetchHistoryData";
import Blogs from "./Blogs";

export default function FashionBlogs() {
  const { articles } = useFetchFashionArticles();

  return (
    <div className="blog-container">
      <Blogs blog={articles} />
    </div>
  );
}
