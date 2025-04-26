import useFetchData from "../hooks/useFetchData";
import Blogs from "./Blogs";
import Loader from "./Loader";

export default function AllBlogs() {
  const { articles, loading } = useFetchData();

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="blog-container">
      <Blogs data={articles} />
    </div>
  );
}
