import { NewsContext } from "../context";
import { useNewsQuery } from "../hooks";

const NewsProvider = ({ children }) => {
  const { news, error, loading, setCategory } = useNewsQuery();
  return (
    <NewsContext.Provider value={{ news, error, loading, setCategory }}>
      {children}
    </NewsContext.Provider>
  );
};
export default NewsProvider;
