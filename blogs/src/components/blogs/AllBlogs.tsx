import useFetchData from "../../hooks/useFetchData";

import Loader from "../Loader";
import Blogs from "../blogs/Blogs";

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
