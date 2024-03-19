import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import NewsBoard from "./components/NewsBoard/NewsBoard";
import NewsProvider from "./provider/NewsProvider";
import SearchProvider from "./provider/SearchProvider";

const App = () => {
  return (
    <>
      <SearchProvider>
        <NewsProvider>
          <Navbar />
          <NewsBoard />
          <Footer />
        </NewsProvider>
      </SearchProvider>
    </>
  );
};

export default App;
