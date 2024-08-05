import css from './Recipe.module.css';

export const Recipe = () => {
  return (
    <div className={css.container}>
      <div className={css.recipeInfo}>
        <dev className={css.text}>
          <h1 className={css.recipeName}></h1>
          <p className={css.recipeDesc}></p>
        </dev>
        <button className={css.button}></button>
      </div>
    </div>
  );
};
