import { useState, useEffect } from "react";
import { ArticleTypes } from "./useFetchSportData";

// TODO url

function useFetchFashionArticles() {
  const [articles, setArticles] = useState<ArticleTypes[]>([]);
  const apiKey = "f1aca3bad53841af94f6e9fd2ec6392f";
  const url = `https://newsapi.org/v2/everything?q=fashion-week&language=en&apiKey=${apiKey}`;

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

export default useFetchFashionArticles;
