import { useState, useRef, useContext } from "react";
import { useDebounce } from "../../hooks";
import { NewsContext, SearchContext } from "../../context";

const Search = () => {
  const { setSearchValue } = useContext(SearchContext);
  const { setCategory } = useContext(NewsContext);

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const doSearch = useDebounce((searchTerm) => {
    setSearchValue(searchTerm.toLowerCase());
  }, 1000);

  function handleChange(e) {
    // setCategory("");
    const value = e.target.value;
    doSearch(value);
  }

  function handleButtonClick() {
    setIsFocused(!isFocused);
    if (!isFocused) {
      inputRef.current.focus();
    }
  }
  function handleButtonClose() {
    inputRef.current.value = "";
    setIsFocused(false);
    setSearchValue("");
  }

  return (
    <div
      className={`relative ${
        isFocused ? "focus-within:bg-black/30 rounded-lg" : ""
      }`}
    >
      <div className="flex items-center space-x-2 py-2 px-3 group border-b border-white/50">
        <input
          ref={inputRef}
          className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none rounded-md border-none"
          type="search"
          placeholder="Search.."
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            inputRef.current.value = "";
            // setSearchValue("");
          }}
        />
        {isFocused && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 mr-3 flex items-center"
            onClick={handleButtonClose}
          >
            ❌{" "}
          </button>
        )}
        {!isFocused && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 mr-3 flex items-center"
            onClick={handleButtonClick}
          >
            <img src="./assets/icons/search.svg" alt="Search" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
