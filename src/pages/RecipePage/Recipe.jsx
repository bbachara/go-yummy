import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getOwnRecipeById, getRecipeById } from 'src/api/recipeAPI';
import RecipeInfo from './RecipeComponents/RecipeInfo';
import RecipeIngredients from './RecipeComponents/RecipeIngredients';
import RecipePreparation from './RecipeComponents/RecipePreparation';
import Loader from 'src/components/Loader/Loader';
import RecipesNotFound from 'src/assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-mobile.png';

export const Recipe = () => {
  const { recipeId } = useParams();
  const { search } = useLocation();

  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      setIsLoading(true);
      try {
        const data = search
          ? await getOwnRecipeById(recipeId)
          : await getRecipeById(recipeId);
        setRecipe(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId, search]);

  if (isLoading) return <Loader />;

  if (!recipe) return <RecipesNotFound text="Can't find your recipe..." />;

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
