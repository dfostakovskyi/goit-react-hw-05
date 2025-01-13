// src/components/SearchForm/SearchForm.jsx

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./SearchForm.module.css";

export const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const initialQuery = searchParams.get("query");
    if (initialQuery !== null) {
      setQuery(initialQuery);
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={style.input}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
