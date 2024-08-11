import {
  fetchPopularCategories,
  fetchRecipesByCategory,
} from 'api/homePageAPI';
import css from './PreviewCategory.module.css';
import { useState, useEffect, useMemo } from 'react';
import { PreviewRecipeCard } from '../PreviewRecipeCard/PreviewRecipeCard';
import { Link } from 'react-router-dom';

export const PreviewCategory = () => {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState({});
  const currentToken = localStorage.getItem('token');
  const [recipesToShow, setRecipesToShow] = useState(4);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchPopularCategories(currentToken);
      setCategories(data);
      // console.log('Fetched categories:', data);
    };
    getCategories();
  }, [currentToken]);

  const popularCategories = useMemo(() => {
    return categories.filter(
      category =>
        category === 'Breakfast' ||
        category === 'Miscellaneous' ||
        category === 'Chicken' ||
        category === 'Dessert'
    );
  }, [categories]);

  
  useEffect(() => {
    if (popularCategories.length > 0) {
      const fetchRecipes = async () => {
        const fetchedRecipes = {};
        for (const popularCategory of popularCategories) {
          try {
            const response = await fetchRecipesByCategory(
              popularCategory,
              currentToken
            );
            fetchedRecipes[popularCategory] = response.recipe;
          } catch (error) {
            console.error(`Error fetching recipes for ${popularCategory}:`, error);
          }
        }
        setRecipes(fetchedRecipes);
      };fetchRecipes();
    }
  }, [popularCategories, currentToken]);

  const updateRecipesToShow = () => {
    const width = window.innerWidth;
    if (width > 1440) {
      setRecipesToShow(4);
    } else if (width < 1439) {
      setRecipesToShow(2);
    } else {
      setRecipesToShow(1);
    }
  };

  useEffect(() => {
    updateRecipesToShow();
    window.addEventListener('resize', updateRecipesToShow);
    return () => window.removeEventListener('resize', updateRecipesToShow);
  }, []);

  // console.log('Categories:', categories);
  // console.log('Popular Categories:', popularCategories);
  // console.log('Recipes', recipes);

  return (
    <div className={css.previewCategoriesDiv}>
      {popularCategories.map(popularCategory => (
        <ul className={css.popularCategoryUl} key={popularCategory._id}>
          <li className={css.popularCategoryLi}>
            <div className={css.popularCategoryHeader}>
              <Link to={`/categories/${popularCategory.toLowerCase()}`}>
                <h3 className={css.popularCategoryHeading}>
                  {popularCategory}
                </h3>
              </Link>
            </div>
            <ul className={css.popularRecipeUl}>
              {recipes[popularCategory] &&
                Object.values(recipes[popularCategory])
                  .slice(0, recipesToShow)
                  .map(recipe => (
                    <Link to={`/recipes/${recipe._id}`}>
                      <PreviewRecipeCard
                        className={css.popularRecipeLi}
                        key={recipe._id}
                        recipe={recipe}
                      />
                    </Link>
                  ))}
            </ul>
            <Link className={css.seeAllPosition} to="/categories/">
              <button className={css.seeAll}>See all</button>
            </Link>
          </li>
        </ul>
      ))}
      <Link to="/categories/">
        <button className={css.previewCategoriesOtherCategories}>
          Other categories
        </button>
      </Link>
    </div>
  );
};
