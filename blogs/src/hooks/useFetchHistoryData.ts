import { useState, useEffect } from "react";
import { ArticleTypes } from "../type";

function useFetchHistoryArticles() {
  const [articles, setArticles] = useState<ArticleTypes[]>([]);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=history&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          throw new Error("Failed to fetch");
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [url]);

  return { articles };
}

export default useFetchHistoryArticles;
