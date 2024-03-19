import { useContext } from "react";
import { NewsContext } from "../../context";
import NewsContent from "./NewsContent";

const NewsBoard = () => {
  const { news, error, loading } = useContext(NewsContext);

  console.log(news);

  // Check if loading state is true
  if (loading?.status) {
    return (
      <main className="my-10 lg:my-14">
        <div className="text-center font-extrabold text-5xl">
          <p>Loading News ...</p>
        </div>
      </main>
    );
  }

  // Check if there's an error
  if (error) {
    return (
      <main className="my-10 lg:my-14">
        <div className="text-center font-extrabold text-5xl">
          <p>Error fetching news data.</p>
        </div>
      </main>
    );
  }

  // Check if news data is empty
  if (!news || news.totalResults === 0) {
    return (
      <main className="my-10 lg:my-14">
        <div className="text-center font-extrabold text-5xl">
          <p>No news found.</p>
        </div>
      </main>
    );
  }

  // News data is available, render NewsContent component
  return (
    <main className="my-10 lg:my-14">
      <NewsContent />
    </main>
  );
};

export default NewsBoard;
