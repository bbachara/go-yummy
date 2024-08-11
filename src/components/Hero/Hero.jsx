import css from './Hero.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';

export const Hero = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = event => setSearch(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      Notiflix.Notify.warning('Please enter a word!');
      setSearch('');
      return;
    }
    navigate(`/search?query=${search}`);
    setSearch('');
  };

  return (
    <div className={css.container}>
      <div className={css.intro}>
        <h1 className={css.soyummy}>
          <span className={css.accent}>So</span>Yummy
        </h1>
        <p className={css.introParagraph}>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </p>
      </div>
      <div className={css.saladBowlDiv}>
        <img
          className={css.saladBowlImg}
          alt="salad bowl"
          src={require('../../assets/HomePage/unsplash-desktop.png')}
          width="100%"
          height="100%"
          srcSet={`
            ${require('../../assets/HomePage/unsplash-desktop.png')} 1x,
            ${require('../../assets/HomePage/unsplash-desktop@2x.png')} 2x
          `}
        />
        <div className={css.seeRecipesWindow}>
          <p className={css.seeRecipesParagraph}>
            <span className={css.accent}>Delicious and healthy</span> way to
            enjoy a variety of fresh ingredients in one satisfying meal
          </p>
          <Link to="/categories/">
            <button className={css.seeRecipesButton}>
              See recipes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                height="100%"
                weight="100%"
                className={css.seeRecipeSVG}
              >
                <path
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className={css.searchDiv}>
        <form onSubmit={onSubmit} className={css.searchForm}>
          <label className={css.searchLabel}>Search phrase</label>
          <input
            className={css.searchInput}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          ></input>
          <button className={css.searchButton}>Search</button>
        </form>
      </div>
    </div>
  );
};
