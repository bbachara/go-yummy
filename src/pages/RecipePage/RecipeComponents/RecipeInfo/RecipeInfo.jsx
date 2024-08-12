import React, { useState } from 'react';
import clockIcon from '../../../../assets/icons.svg#icon-clock';
import css from './RecipeInfo.module.css';

const RecipeInfo = ({ title, description, time, recipeId }) => {
  const [favorites, setFavorites] = useState([]);

  const isFavorite = favorites.includes(recipeId);

  const toggleFavorite = () => {
    try {
      if (isFavorite) {
        setFavorites(favorites.filter(id => id !== recipeId));
      } else {
        setFavorites([...favorites, recipeId]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={css.recipeInfo}>
      <div className={css.wrapper}>
        <div className={css.textContainer}>
          <h1 className={css.h1}>{title}</h1>
          <p className={css.p}>{description}</p>
        </div>
        <button type="button" className={css.button} onClick={toggleFavorite}>
          {isFavorite
            ? 'Remove from favorite recipes'
            : 'Add to favorite recipes'}
        </button>
        <div className={css.timeContainer}>
          <img className={css.clockIcon} src={clockIcon} alt="clock"></img>
          {/* <svg className={css.clockIcon} aria-hidden="true">
            <use href={clockIcon}></use>
          </svg> */}
          <span className={css.span}>Time: {time} min</span>
        </div>
      </div>
    </section>
  );
};

export default RecipeInfo;
