import useFetchData from "../hooks/useFetchData";
import Blogs from "./Blogs";

export default function AllBlogs() {
  const { articles } = useFetchData();
  console.log(articles);
  return (
    <div className="blog-container">
      <Blogs data={articles} />
    </div>
  );
}
