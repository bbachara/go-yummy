import React, { useEffect, useState } from 'react';
import { fetchPopularCategories, fetchRecipesByCategory } from '../../api/homePageAPI'; 
import styles from './Categories.module.css'; 

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjE0YTkwZTEwNjA3YjQ3MGFmYjA5OSIsImVtYWlsIjoibWlrb2xhamJsYWpla0BnbWFpbC5jb20iLCJpYXQiOjE3MjMwNDg4NjUsImV4cCI6MTcyMzE1Njg2NX0.tx-c8hhjbxmPqe8VKktt5SUM2rjBVbrI9MGXnBjUWbE'; // Wstaw swój rzeczywisty token

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchPopularCategories(token);
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    getCategories();
  }, []);

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    try {
      const data = await fetchRecipesByCategory(category, token);
      setRecipes(data);
    } catch (error) {
      console.error(`Failed to fetch recipes for category ${category}:`, error);
    }
  };

  return (
    <section className={styles.categoriesPageSection}>
      <div className={styles.container}>
        <h2 className={styles.categoriesPageTitle}>Popular Categories</h2>
        <div className={styles.tabsWrapper}>
          {categories.length > 0 ? (
            <ul className={styles.tabs}>
              {categories.map((category, index) => (
                <li 
                  key={index} 
                  className={`${styles['MuiTab-root']} ${selectedCategory === category ? styles['MuiTab-root-selected'] : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading categories...</p>
          )}
        </div>
        <div>
          {selectedCategory && recipes.length > 0 ? (
            <ul>
              {recipes.map((recipe, index) => (
                <li key={index}>
                  <h3>{recipe.title}</h3>
                  <img src={recipe.thumb} alt={recipe.title} />
                  <p>{recipe.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            selectedCategory && <p>Loading recipes...</p>
          )}
        </div>
      </div>
    </section>
  );
}

