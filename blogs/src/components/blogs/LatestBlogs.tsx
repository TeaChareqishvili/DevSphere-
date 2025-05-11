import useFetchData from "../../hooks/useFetchData";
import Loader from "../Loader";
import Blogs from "./Blogs";

export default function LatestBlogs() {
  const { articles, loading } = useFetchData();

  const now = new Date();
  const fiveDaysAgo = new Date();
  fiveDaysAgo.setDate(now.getDate() - 3);

  const latestArticles = articles.filter((article) => {
    const publishedDate = new Date(article.published_timestamp);
    return publishedDate >= fiveDaysAgo;
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="blog-container">
      <Blogs data={latestArticles} />
    </div>
  );
}
