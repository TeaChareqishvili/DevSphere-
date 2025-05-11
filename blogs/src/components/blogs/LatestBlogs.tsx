import useFetchData from "../../hooks/useFetchData";
import Loader from "../Loader";
import Blogs from "./Blogs";

export default function LatestBlogs() {
  const { articles, loading } = useFetchData();

  const now = new Date();
  const fiveDaysAgo = new Date();
  fiveDaysAgo.setDate(now.getDate() - 3);

  const latestArticles = articles
    .filter((article) => new Date(article.published_timestamp) >= fiveDaysAgo)
    .sort(
      (a, b) =>
        new Date(b.published_timestamp).getTime() -
        new Date(a.published_timestamp).getTime()
    );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="blog-container">
      <Blogs data={latestArticles} />
    </div>
  );
}
