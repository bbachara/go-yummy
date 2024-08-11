import notFoundImage from 'src/assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-mobile.png';
import css from './RecipePreparation.module.css';

export const RecipePreparation = ({ recipe }) => {
  const { title, instructions, thumb } = recipe;
  const instructionsArray = instructions
    .split('\r\n')
    .filter(instruction => instruction.trim() !== '');

  return (
    <section className={css.recipePreparation}>
      <div className={css.altWrapper}>
        <div>
          <h2 className={css.header}>Recipe Preparation</h2>
          <ol className={css.list}>
            {instructionsArray.map((instruction, index) => (
              <li key={index} className={css.step}>
                <p className={css.instruction}>{instruction}</p>
              </li>
            ))}
          </ol>
        </div>
        <img
          src={thumb || notFoundImage.default}
          alt={title}
          className={css.image}
        />
      </div>
    </section>
  );
};
