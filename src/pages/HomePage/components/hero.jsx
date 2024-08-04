import css from '../Home.module.css';

export const Hero = () => {
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
          src={require('../../../assets/HomePage/unsplash-mobile.png')}
          width="100%"
          height="100%"
          srcSet={`
            ${require('../../../assets/HomePage/unsplash-mobile.png')} 1x,
            ${require('../../../assets/HomePage/unsplash-mobile@2x.png')} 2x
          `}
        />
        <div className={css.seeRecipesWindow}>
          <p className={css.seeRecipesParagraph}>
            <span className={css.accent}>Delicious and healthy</span> way to
            enjoy a variety of fresh ingredients in one satisfying meal
          </p>
          <button className={css.seeRecipesButton}>See recipes</button>
        </div>
      </div>
      <div className={css.searchDiv}>
        <form>
          <label className={css.searchLabel}>Search phrase</label>
          <input className={css.searchInput} type="text"></input>
          <button className={css.searchButton}>Search</button>
        </form>
      </div>
    </div>
  );
};
