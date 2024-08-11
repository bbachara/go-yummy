import React, { useEffect, useState } from 'react';
import { fetchPopularCategories, fetchRecipesByCategory } from '../../api/homePageAPI'; 
import styles from './Categories.module.css'; 
import { Link } from 'react-router-dom';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    // Pobieranie tokenu z localStorage
    const token = localStorage.getItem('token');

    const getCategories = async () => {
      try {
        const data = await fetchPopularCategories(token);
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    if (token) {
      getCategories();
    } else {
      console.error('No token found in localStorage');
    }
  }, []);

  const handleCategoryClick = async (category) => {
    // Pobieranie tokenu z localStorage
    const token = localStorage.getItem('token');

    setSelectedCategory(category);
    setRecipes([]); 
    setLoading(true); 
    try {
      const data = await fetchRecipesByCategory(category, token);
      console.log('Data from backend:', data); 
      setRecipes(data.recipe); 
    } catch (error) {
      console.error(`Failed to fetch recipes for category ${category}:`, error);
    } finally {
      setLoading(false); 
    }
  };
  
  return (
    <section className={styles.categoriesPageSection}>
      <div className={styles.container}>
        <h2 className={styles.categoriesPageTitle}>Categories</h2>
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
        <div className={styles.boxcategories}>
          {loading ? (
            <p>Loading recipes...</p> 
          ) : recipes.length > 0 ? (
            <ul className={styles.recipeList}>
              {recipes.map((recipe, index) => (
                <Link to={`/recipes/${recipe._id}`} key={index} className={styles.recipeItem}>
                  <h3>{recipe.title}</h3>
                  <img src={recipe.thumb} alt={recipe.title} className={styles.recipeImage} />
            
                </Link>
              ))}
            </ul>
          ) : (
            selectedCategory && <p>No recipes found for this category.</p> 
          )}
        </div>
      </div>
    </section>
  );
}