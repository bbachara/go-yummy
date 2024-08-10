import React, { useState } from 'react';
import css from './Search.module.css';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const API = 'https://api.example.com/search'; // Zaktualizuj adres API !!!!!!!!!!!!

  const handleSearch = async () => {
    try {
      const response = await fetch(`${API}?query=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Network response was not ok');
      }

      setResults(data.results || []);
      if (data.results.length === 0) {
        setError('No results found');
      } else {
        setError(null);
      }
    } catch (error) {
      setError('An error occurred');
      setResults([]);
    }
  };

  return (
    <div className={css.searchPage}>
      <h1 className={css.title}>Search</h1>
      <div className={css.searchBarContainer}>
        <input
          type="text"
          className={css.searchBar}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button onClick={handleSearch} className={css.searchButton}>Search</button>
      </div>
      {error && <p className={css.error}>{error}</p>}
      <div className={css.results}>
        {results.map((result, index) => (
          <div key={index} className={css.resultCard}>
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;