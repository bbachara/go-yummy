import { useNavigate } from 'react-router-dom';
import css from '../Home.module.css';
import { PreviewRecipeCard } from './PreviewRecipeCard';

export const previewCategoryCard = ({ title, category }) => {
  const navigate = useNavigate();

  return (
    <div className={css.popularCategoryUl}>
      <div className={css.popularCategoryLi}>
        <div className={css.popularCategoryHeader}>
          <h3 className={css.popularCategoryHeading}>{title}</h3>
        </div>
        <ul className={css.popularRecipeUl}>
          {category.map(({ _id, title, category, preview }) => (
            <PreviewRecipeCard
              title={title}
              category={category}
              className={css.popularRecipeLi}
              key={recipe._id}
              recipe={recipe}
              onClick={() => navigate('/recipe' + recipe._id)}
            />
          ))}
        </ul>
        <button
          className={css.seeAll}
          onClick={() => navigate('/categories' + title)}
        >
          See all
        </button>
      </div>
    </div>
  );
};
