import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";

import Loader from "../Loader";
import Search from "../Search";
import Blogs from "../blogs/Blogs";

export default function AllBlogs() {
  const { articles, loading } = useFetchData();
  const [query, setQuery] = useState("");

  const filtered = query
    ? articles.filter((article) =>
        article.tag_list.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        )
      )
    : [];
  let filteredLength = filtered.length;
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="container">
      <Search
        query={query}
        setQuery={setQuery}
        filteredLength={filteredLength}
      />
      <div className="blog-container">
        {filtered.length > 0 ? (
          <Blogs data={filtered} />
        ) : (
          <Blogs data={articles} />
        )}
      </div>
    </div>
  );
}
