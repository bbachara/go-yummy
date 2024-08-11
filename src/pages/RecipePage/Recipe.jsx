import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getRecipeById } from 'src/api/recipeAPI';
import { RecipeInfo } from './RecipeComponents/RecipeInfo';
import { RecipeIngredients } from './RecipeComponents/RecipeIngredients';
import { RecipePreparation } from './RecipeComponents/RecipePreparation';
import { Loader } from 'src/components/Loader/Loader';
import { notFoundImage } from 'src/assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-mobile.png';
import css from './Recipe.module.module.css';

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
        const data = search;
        await getRecipeById(recipeId);
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
