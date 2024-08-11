import React, { useState } from 'react';
import css from './RecipeInfo.module.module.css';

export const RecipeInfo = ({ title, description, time }) => {
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
        <svg className={css.clockIcon}>
          <use href="./assets/icons.svg#icon-clock" />
        </svg>
        <span className={css.span}>{time} min</span>
      </div>
    </section>
  );
};
