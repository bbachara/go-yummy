// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   getShoppingList,
//   addShoppingList,
//   selectShoppingList,
// } from '';
import css from './RecipeIngredients.module.css';

const RecipeIngredients = ({ ingredients }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getShoppingList());
  // }, [dispatch]);

  // const shoppingList = useSelector(selectShoppingList);

  return (
    <section className={css.recipeIngredients}>
      <div className={css.listHeader}>
        <p className={css.p_ingredients}>Ingredients</p>
        <p className={css.p_number}>Number</p>
        <p>Add to list</p>
      </div>
      <div className={css.list}>
        {ingredients.map(ingredient => (
          <div className={css.listItem}>
            <div className={css.imageAndNameWrapper}>
              <img
                src={ingredient.thb}
                alt={ingredient.ttl}
                className={css.image}
              />
              <p className={css.name}>{ingredient.ttl}</p>
            </div>
            <div className={css.measureAndCheckboxWrapper}>
              <div>
                <p className={css.measure}>{ingredient.measure}</p>
              </div>
              <div>
                {/* <input
                  className={css.checkbox}
                  type="checkbox"
                  id={ingredient._id}
                  checked={shoppingList.some(
                    item =>
                      item.ttl === ingredient.ttl &&
                      item.recipeId === ingredient.recipeId
                  )}
                  disabled={shoppingList.some(
                    item =>
                      item.ttl === ingredient.ttl &&
                      item.recipeId === ingredient.recipeId
                  )}
                  onChange={() => dispatch(addShoppingList(ingredient))}
                /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeIngredients;
