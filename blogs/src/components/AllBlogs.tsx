import useFetchData from "../hooks/useFetchData";
import Blogs from "./Blogs";

export default function AllBlogs() {
  const { articles } = useFetchData();
  return (
    <div className="blog-container">
      <Blogs data={articles} />
    </div>
  );
}
