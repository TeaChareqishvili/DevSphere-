import { useEffect, useState } from "react";
import { DevToArticleType } from "../type";

export default function useFetchData() {
  const [articles, setArticles] = useState<DevToArticleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const url = `https://dev.to/api/articles`;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [url]);

  return { articles, loading, error };
}
