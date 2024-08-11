import React, { useEffect, useState } from 'react';
import css from './Search.module.css';
import { fetchRecipesByText } from 'api/homePageAPI';
import Notiflix from 'notiflix';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('query') || '';
    if (searchQuery) {
      setQuery(searchQuery);
      handleSearch(searchQuery);
    }
  }, [location.search]);

  const handleSearch = async searchQuery => {
    if (searchQuery.trim() === '') {
      Notiflix.Notify.warning('Please enter a search term!');
      return;
    }
    // console.log('Query is:', searchQuery);
    try {
      const token = localStorage.getItem('token');
      const data = await fetchRecipesByText(searchQuery, token);
      setResults(data || []);

      if (data.length === 0) {
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
          onChange={e => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button
          onClick={() => handleSearch(query)}
          className={css.searchButton}
        >
          Search
        </button>
      </div>
      {error && <p className={css.error}>{error}</p>}
      <div className={css.results}>
        {results.map((result, index) => (
          <div key={index} className={css.resultCard}>
            <img
              className={css.resultImg}
              alt={result.title}
              src={result.preview}
              width="100%"
              height="100%"
            />
            <div className={css.resultName}>{result.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
