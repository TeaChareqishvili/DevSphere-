import { useState, useEffect } from "react";

export type ArticleTypes = {
  id: number;
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: null; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

function useFetchSportArticles() {
  const [articles, setArticles] = useState<ArticleTypes[]>([]);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=sports&apiKey=${apiKey}`;

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
  }, []);

  return { articles };
}

export default useFetchSportArticles;
