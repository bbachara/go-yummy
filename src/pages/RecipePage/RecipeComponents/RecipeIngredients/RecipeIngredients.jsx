import css from './RecipeIngredients.module.css';

const RecipeIngredients = ({ ingredients }) => {
  return (
    <section className={css.recipeIngredients}>
      <div className={css.listHeaderContainer}>
        <p>Ingredients</p>
        <div className={css.numberAndAddWrapper}>
          <p>Number</p>
          <p>Add to list</p>
        </div>
      </div>
      <div className={css.list}>
        {ingredients.map(ingredient => (
          <div className={css.listItem}>
            <div className={css.imageAndNameWrapper}>
              <img
                src={ingredient.thumb}
                alt={ingredient.ttl}
                className={css.image}
              />
              <p className={css.name}>{ingredient.title}</p>
            </div>
            <div className={css.measureAndCheckboxWrapper}>
              <div>
                <p className={css.measure}>{ingredient.measure}</p>
              </div>
              <div>
                <input
                  className={css.checkbox}
                  type="checkbox"
                  id={ingredient._id}
                ></input>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// const RecipeIngredients = ({ ingredients }) => {
//   return (
//     <section className={css.recipeIngredients}>
//       <div className={css.listHeaderContainer}>
//         <p>Ingredients</p>
//         <div className={css.numberAndAddWrapper}>
//           <p>Number</p>
//           <p>Add to list</p>
//         </div>
//       </div>
//       <div className={css.list}>
//         {ingredients.map(ingredient => (
//           <div className={css.listItem} key={ingredient._id.$oid}>
//             <div className={css.imageAndNameWrapper}>
//               <img
//                 src={ingredient.thb}
//                 alt={ingredient.ttl}
//                 className={css.image}
//               />
//               <p className={css.name}>{ingredient.ttl}</p>
//             </div>
//             <div className={css.measureAndCheckboxWrapper}>
//               <div>
//                 <p className={css.measure}>{ingredient.measure}</p>
//               </div>
//               <div>
//                 <input
//                   className={css.checkbox}
//                   type="checkbox"
//                   id={ingredient._id.$oid}
//                 ></input>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

export default RecipeIngredients;
