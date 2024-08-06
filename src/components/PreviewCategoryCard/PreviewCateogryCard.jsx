import { useNavigate } from 'react-router-dom';
import css from './PreviewCategoryCard.module.css';
import { PreviewRecipeCard } from '../PreviewRecipeCard/PreviewRecipeCard';

export const PreviewCategoryCard = ({ title, category }) => {
  const navigate = useNavigate();

  const GoToRecipeClick = recipeId => {
    navigate(`/recipes/${recipeId}`);
  };

  const SeeAllClick = () => {
    navigate(`/recipes/categories/${title}`);
  };

  return (
    <div className={css.popularCategoryUl}>
      <div className={css.popularCategoryLi}>
        <div className={css.popularCategoryHeader}>
          <h3 className={css.popularCategoryHeading}>{title}</h3>
        </div>
        <ul className={css.popularRecipeUl}>
          {category.map(recipe => (
            <PreviewRecipeCard
              className={css.popularRecipeLi}
              key={recipe._id}
              recipe={recipe}
              onClick={() => GoToRecipeClick(recipe._id)}
            />
          ))}
        </ul>
        <button className={css.seeAll} onClick={SeeAllClick}>
          See all
        </button>
      </div>
    </div>
  );
};
