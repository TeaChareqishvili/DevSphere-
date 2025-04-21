import useFetchFashionArticles from "../hooks/useFetchHistoryData";
import Blogs from "./Blogs";

export default function FashionBlogs() {
  const { articles } = useFetchFashionArticles();

  console.log(articles, "fashion");
  return (
    <div className="blog-container">
      <Blogs blog={articles} />
    </div>
  );
}
