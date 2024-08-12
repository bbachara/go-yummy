import notFoundImage from '../../../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-mobile.png';
import css from './RecipePreparation.module.css';

const RecipePreparation = ({ recipe }) => {
  const { title, instructions, thumb } = recipe;
  const instructionsArray = instructions
    .split('\r\n')
    .filter(instruction => instruction.trim() !== '');

  return (
    <section className={css.recipePreparation}>
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
      <img src={thumb || notFoundImage} alt={title} className={css.image} />
    </section>
  );
};

export default RecipePreparation;
