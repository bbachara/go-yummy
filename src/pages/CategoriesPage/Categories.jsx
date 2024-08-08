import React, { useEffect, useState } from 'react';
import { fetchPopularCategories, fetchRecipesByCategory } from '../../api/homePageAPI'; 
import styles from './Categories.module.css'; 

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjE0YTkwZTEwNjA3YjQ3MGFmYjA5OSIsImVtYWlsIjoibWlrb2xhamJsYWpla0BnbWFpbC5jb20iLCJpYXQiOjE3MjMxMzczMzAsImV4cCI6MTcyMzI0NTMzMH0.Tvqpp405wpNT0bJ6ISvnKsXfcRMMmT4Ocqv7U32zKWI'; // Wstaw swój rzeczywisty token

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false); // Dodanie stanu ładowania

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
    setRecipes([]); // Wyczyszczenie poprzednich przepisów
    setLoading(true); // Ustawienie stanu ładowania
    try {
      const data = await fetchRecipesByCategory(category, token);
      console.log('Data from backend:', data); // Logowanie odpowiedzi z backendu
      setRecipes(data.recipe); // Ustawienie odpowiedniego stanu
    } catch (error) {
      console.error(`Failed to fetch recipes for category ${category}:`, error);
    } finally {
      setLoading(false); // Wyłączenie stanu ładowania
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
            <p>Loading recipes...</p> // Wyświetlanie komunikatu ładowania
          ) : recipes.length > 0 ? (
            <ul className={styles.recipeList}>
              {recipes.map((recipe, index) => (
                <li key={index} className={styles.recipeItem}>
                  <h3>{recipe.title}</h3>
                  <img src={recipe.thumb} alt={recipe.title} className={styles.recipeImage} />
                  {/* <p>{recipe.description}</p> */}
                </li>
              ))}
            </ul>
          ) : (
            selectedCategory && <p>No recipes found for this category.</p> // Komunikat, jeśli nie ma przepisów
          )}
        </div>

      </div>
    </section>
  );
}
