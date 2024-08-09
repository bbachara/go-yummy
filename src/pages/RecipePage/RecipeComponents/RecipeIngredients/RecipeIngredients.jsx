import React, { useState, useEffect } from 'react';
import css from './RecipeIngredients.module.css';

export const RecipeIngredients = ({ ingredients, recipeId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  const shoppingList = useSelector(selectShoppingList);

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
                <input
                  className={css.checkbox}
                  type="checkbox"
                  id={ingridient._id}
                  checked={shoppingList.some(
                    item =>
                      item.ttl === ingridient.ttl &&
                      item.recipeId === ingridient.recipeId
                  )}
                  disabled={shoppingList.some(
                    item =>
                      item.ttl === ingridient.ttl &&
                      item.recipeId === ingridient.recipeId
                  )}
                  onChange={() => dispatch(addShoppingList(ingridient))}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// <div>
//   {ingredients?.map(({ _id, measure, img, name }) => {
//     return (
//       <div key={`${measure}_${_id}`}>
//         <div>
//           <img src={img} alt="name" />
//           <p>{name}</p>
//         </div>

//         <div>
//           <p>
//             {measure ?? 'No info'}
//           </IngredientMeasure>
//           <CustomCheckbox
//             ingredient={{ _id, name, img, measure }}
//             shoppingList={shoppingList}
//             recipeId={recipeId}
//           />
//         </div>
//       </div>
//     );
//   })}
// </div>
