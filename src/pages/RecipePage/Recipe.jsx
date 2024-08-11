import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getRecipeById from '../../api/recipeAPI';
import RecipeInfo from './RecipeComponents/RecipeInfo/RecipeInfo';
import RecipeIngredients from './RecipeComponents/RecipeIngredients/RecipeIngredients';
import RecipePreparation from './RecipeComponents/RecipePreparation/RecipePreparation';
import Loader from '../../components/Loader/Loader';
import notFoundImage from '../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-mobile.png';
import css from './Recipe.module.css';

const Recipe = () => {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      setIsLoading(true);
      try {
        const data = await getRecipeById(recipeId); // Popraw to na wywołanie API
        setRecipe(data); // Ustaw wynik na `recipe`
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (isLoading) return <Loader />;

  if (!recipe)
    return (
      <div>
        <img src={notFoundImage} alt="not found" className={css.image} />
        <p className={css.p}>Can't find your recipe...</p>
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <RecipeInfo
        title={recipe.title}
        description={recipe.description}
        time={recipe.time}
      />
      <RecipeIngredients ingredients={recipe.ingredients} recipeId={recipeId} />
      <RecipePreparation recipe={recipe} />
    </div>
  );
};

export default Recipe;
