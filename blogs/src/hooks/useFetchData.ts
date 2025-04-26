import { useEffect, useState } from "react";
import { DevToArticleType } from "../type";

export default function useFetchData() {
  const [articles, setArticles] = useState<DevToArticleType[]>([]);

  const url = `https://dev.to/api/articles`;

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(url);

      const data = await response.json();

      setArticles(data);
    };

    fetchArticles();
  }, [url]);

  return { articles };
}
