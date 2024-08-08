import css from './PreviewCategory.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/recipes/categories/operations';
import { PreviewCategoryCard } from 'components/PreviewCategoryCard/PreviewCateogryCard';

export const PopularCategories = () => {
  const dispatch = useDispatch();
  const [popularCategories, setPopularCategories] = useState([]);
  const navigate = useNavigate();
  // const token = useSelector(state => state.auth.token);

  const getCategories = async () => {
    const dataPopularCategories = await fetchCategories();
    setPopularCategories(dataPopularCategories);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const breakfastCateogry = popularCategories.filter(
    popularCategory => popularCategory.category === 'Breakfast'
  );

  const miscellaneousCateogry = popularCategories.filter(
    popularCategory => popularCategory.category === 'Miscellaneous'
  );

  const chickenCategory = popularCategories.filter(
    popularCategory => popularCategory.category === 'Chicken'
  );

  const dessertCategory = popularCategories.filter(
    popularCategory => popularCategory.category === 'Dessert'
  );

  const otherCategoriesClick = () => {
    navigate(`/recipes/categories/`);
  };

  console.log(setPopularCategories);

  return (
    <div className={css.previewCategories}>
      {breakfastCateogry && (
        <PreviewCategoryCard title="Breakfast" category="breakfastCategory" />
      )}
      {miscellaneousCateogry && (
        <PreviewCategoryCard
          title="Miscellaneous"
          category="miscellaneousCateogry"
        />
      )}
      {chickenCategory && (
        <PreviewCategoryCard title="Chicken" category="chickenCategory" />
      )}
      {dessertCategory && (
        <PreviewCategoryCard title="Desserts" category="dessertCategory" />
      )}
      <button
        className={css.previewCategoriesOtherCategories}
        onClick={otherCategoriesClick}
      >
        Other categories
      </button>
    </div>
  );
};
