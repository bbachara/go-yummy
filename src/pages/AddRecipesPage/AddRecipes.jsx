import React, { useState } from 'react';
import styles from './AddRecipes.module.css';
import AddRecipeForm from '../../components/AddRecipesPage/AddRecipeForm/AddRecipeForm';
import FollowUs from '../../components/AddRecipesPage/FollowUs/FollowUs';
import RecipeImage from '../../components/AddRecipesPage/RecipeImage/RecipeImage';
import IngredientForm from '../../components/AddRecipesPage/IngredientForm/IngredientForm';
import PreparationForm from '../../components/AddRecipesPage/PreparationForm/PreparationForm';

const AddRecipesPage = () => {
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '', unit: 'tbs' }]);
  const [preparation, setPreparation] = useState('');

  const handleRecipeSubmit = (recipe) => {
    console.log('New recipe submitted:', recipe);
    // Tutaj możesz dodać logikę do zapisania przepisu, np. wysłanie do API.
  };

  return (
<div className={styles.container}>
  <h1 className={styles.header}>Add Recipe</h1>
  <div className={styles.contentContainer}>
    <div className={styles.reciepeContainer}>
      <div className={styles.formAndImageContainer}>
        <RecipeImage />
        <div className={styles.formContainer}>
          <AddRecipeForm onSubmit={handleRecipeSubmit} />
        </div>
      </div>
      <div className={styles.ingredientsAndPreparationContainer}>
        <IngredientForm ingredients={ingredients} setIngredients={setIngredients} />
        <PreparationForm preparation={preparation} setPreparation={setPreparation} onSubmit={handleRecipeSubmit} />
      </div>
    </div>
    <div className={styles.followUs}>
      <FollowUs />
    </div>
  </div>
</div>
  );
};

export default AddRecipesPage;