import React from 'react';
import styles from './AddRecipes.module.css';
import AddRecipeForm from '../../components/AddRecipesPage/AddRecipeForm/AddRecipeForm';
import FollowUs from '../../components/AddRecipesPage/FollowUs/FollowUs';
import RecipeImage from '../../components/AddRecipesPage/RecipeImage/RecipeImage';

const AddRecipesPage = () => {
  const handleRecipeSubmit = (recipe) => {
    console.log('New recipe submitted:', recipe);
    // Tutaj możesz dodać logikę do zapisania przepisu, np. wysłanie do API.
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Add Recipe</h1>
      <div className={styles.mainContent}>
        <div className={styles.mainFormContainer}>
          <div className={styles.formContainer}>
            <RecipeImage />
            <AddRecipeForm onSubmit={handleRecipeSubmit} />
          </div>
          <FollowUs />
        </div>
      </div>
    </div>
  );
};

export default AddRecipesPage;