// import React from 'react';
// import styles from './Favorite.module.css';
// import EmptyState from './EmptyState/EmptyState';

// const Favorite = () => {
//   return (
//     <section className={`${styles.section} ${styles.container}`}>
//       <div className={styles.title}>Favorites</div>
//       {/* Na razie wyświetlamy tylko komponent EmptyState */}
//       <EmptyState />
//     </section>
//   );
// };

// export default Favorite;

// ======================== U góry mamy że nic nie zostało dodane do Favorites ==========================

// ======================================================================================================
// ==================================    ODKOMENTUJ GÓRĘ ALBO DÓŁ =======================================
// ======================================================================================================

// ================================ Na dole mamy dwa dodane przepisy ====================================

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Favorite.module.css';
import EmptyState from './EmptyState/EmptyState';

// Importowanie lokalnych obrazów
import recipe1 from './recipe1.jpg';
import recipe2 from './recipe2.jpg';
import trashIcon from './trash.svg'; // Importowanie ikony trash

// Zakomentowane funkcje do pobierania przepisów z backendu i usuwania przepisów

// const fetchFavoriteRecipes = async () => {
//   const response = await fetch(
//     "https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/favorites/favorites"
//   ); // Ścieżka API
//   if (!response.ok) {
//     throw new Error("Failed to fetch favorite recipes");
//   }
//   return response.json();
// };

// const deleteFavoriteRecipe = async (id) => {
//   const response = await fetch(
//     `https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/favorites/favorites${id}`,
//     {
//       method: "DELETE",
//     }
//   );
//   if (!response.ok) {
//     throw new Error("Failed to delete favorite recipe");
//   }
//   return response.json();
// };

const Favorite = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([
    // przykładowe dane do wyświetlenia
    {
      id: 1,
      title: 'Beef Bourguignon',
      description:
        'A classic French beef stew made with red wine, beef broth, bacon, and vegetables like carrots and onions. It is typically served with mashed potatoes or crusty bread.',
      image: recipe1,
      duration: '3 hours 40 min',
    },
    {
      id: 2,
      title: 'Beef Rendang',
      description:
        'A spicy and aromatic Indonesian curry made with tender beef slow-cooked in coconut milk and a blend of flavorful spices like lemongrass, galangal, and turmeric. Served with a side of steamed rice for a hearty meal.',
      image: recipe2,
      duration: '2 hours',
    },
  ]);
  const listRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Pobieranie danych z backendu - zakomentowane
    // const getFavoriteRecipes = async () => {
    //   try {
    //     const data = await fetchFavoriteRecipes();
    //     setFavoriteRecipes(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // getFavoriteRecipes();
  }, []);

  const onDeleteHandler = async id => {
    // Zakomentowana funkcja usuwania
    // try {
    //   await deleteFavoriteRecipe(id);
    //   setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.id !== id));
    // } catch (error) {
    //   console.error(error);
    // }
    setFavoriteRecipes(favoriteRecipes.filter(recipe => recipe.id !== id)); // Usuwanie lokalnie
  };

  const viewRecipeHandler = id => {
    navigate(`/recipes/${id}`); // Przekierowanie do strony przepisu
  };

  return (
    <section className={`${styles.section} ${styles.container}`}>
      <div className={styles.title}>Favorites</div>
      {favoriteRecipes.length === 0 ? (
        <EmptyState />
      ) : (
        <div className={styles.list} ref={listRef}>
          {favoriteRecipes.map(recipe => (
            <div className={styles.recipeCard} key={recipe.id}>
              <div className={styles.recipeImageContainer}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className={styles.recipeImage}
                />
              </div>
              <div className={styles.recipeDetails}>
                <div className={styles.recipeHeader}>
                  <h3 className={styles.recipeTitle}>{recipe.title}</h3>
                  <button
                    className={styles.deleteIcon}
                    onClick={() => onDeleteHandler(recipe.id)}
                  >
                    <img
                      src={trashIcon}
                      alt="Delete"
                      className={styles.trashIcon}
                    />
                  </button>
                </div>
                <p className={styles.recipeDescription}>{recipe.description}</p>
                <div className={styles.recipeFooter}>
                  <p className={styles.recipeDuration}>{recipe.duration}</p>
                  <button
                    className={styles.viewRecipeButton}
                    onClick={() => viewRecipeHandler(recipe.id)}
                  >
                    See recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Favorite;
