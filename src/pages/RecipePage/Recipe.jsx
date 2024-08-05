import css from './Recipe.module.css';
import React, { useState } from 'react';

export const Recipe = () => {
  const [favorites, setFavorites] = useState([]);
  const isFavorite = favorites.includes(recipe.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(id => id !== recipe.id));
    } else {
      setFavorites([...favorites, recipe.id]);
    }
  };

  return (
    <div className={css.container}>
      <section className={css.recipeInfo}>
        <dev className={css.text}>
          <h1 className={css.recipeName}>{recipe.name}</h1>
          <p className={css.recipeDesc}>{recipe.desc}</p>
        </dev>
        <button className={css.button} onClick={handleToggleFavorite}>
          {isFavorite
            ? 'Remove from favorite recipes'
            : 'Add to favorite recipes'}
        </button>
        <div className={css.time}>
          <svg className={css.clockIcon} width="14" height="14">
            <use href="./assets/icons.svg#icon-clock" />
          </svg>
          <p className={css.recipePrepTime}>{recipe.time}</p>
        </div>
      </section>
      <section className={css.recipeIngredientList}></section>
      <section className={css.recipePreparation}></section>
    </div>
  );
};
