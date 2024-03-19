import { useContext, useEffect } from "react";
import { useState } from "react";
import { SearchContext } from "../context";

const useNewsQuery = () => {
  const [news, setNews] = useState({
    articles: "",
    totalResults: 0,
  });
  const [category, setCategory] = useState();

  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const { searchValue } = useContext(SearchContext);

  //   http://localhost:8000/v2/search?q=

  const fetchNews = async (category) => {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "Fetching  news...",
      });
      let constructedURL;
      if (
        category === "general" ||
        category === "business" ||
        category === "entertainment" ||
        category === "health" ||
        category === "science" ||
        category === "sports" ||
        category === "technology"
      ) {
        constructedURL = searchValue.length
          ? `http://localhost:8000/v2/search?q=${searchValue}`
          : `http://localhost:8000/v2/top-headlines?category=${category}`;
      } else if (searchValue) {
        constructedURL = `http://localhost:8000/v2/search?q=${searchValue}`;
      } else {
        constructedURL = searchValue.length
          ? `http://localhost:8000/v2/search?q=${searchValue}`
          : `http://localhost:8000/v2/top-headlines`;
      }
      const response = await fetch(constructedURL);
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      let updatedData;
      if (searchValue) {
        updatedData = {
          ...news,
          articles: data?.result,
          totalResults: data?.totalResults,
        };
      } else {
        updatedData = {
          ...news,
          articles: data?.articles,
          totalResults: data?.totalResults,
        };
      }

      setNews(updatedData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        status: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    setLoading({
      ...loading,
      status: true,
      message: "Getting Categories",
    });
    if (category) {
      fetchNews(category);
    } else if (searchValue) {
      fetchNews();
      console.log("value found");
    } else {
      fetchNews();
    }
  }, [category, searchValue]);
  return { news, error, loading, setCategory };
};
export default useNewsQuery;
