import React from 'react';
import styles from './Favorite.module.css';
import EmptyState from './EmptyState/EmptyState';

const Favorite = () => {
  return (
    <section className={`${styles.section} ${styles.container}`}>
      <div className={styles.title}>Favorites</div>
      {/* Na razie wyświetlamy tylko komponent EmptyState */}
      <EmptyState />
    </section>
  );
};

export default Favorite;

// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './FavoritesPage.module.css';
// import EmptyState from './EmptyState/EmptyState';

// // Zakomentowane funkcje do pobierania przepisów z backendu i usuwania przepisów

// // const fetchFavoriteRecipes = async () => {
// //   const response = await fetch(
// //     "https://so-yummy-31fabc853d58.herokuapp.com/favorites/favorites"
// //   ); // Ścieżka API
// //   if (!response.ok) {
// //     throw new Error("Failed to fetch favorite recipes");
// //   }
// //   return response.json();
// // };

// // const deleteFavoriteRecipe = async (id) => {
// //   const response = await fetch(
// //     `https://so-yummy-31fabc853d58.herokuapp.com/favorites/favorites${id}`,
// //     {
// //       method: "DELETE",
// //     }
// //   );
// //   if (!response.ok) {
// //     throw new Error("Failed to delete favorite recipe");
// //   }
// //   return response.json();
// // };

// const FavoritesPage = () => {
//   const [favoriteRecipes, setFavoriteRecipes] = useState([
//     // Zakomentowane dane z backendu, przykładowe dane na potrzeby wyświetlenia
//     {
//       id: 1,
//       title: 'Example Recipe',
//       description: 'This is an example recipe description.',
//       image: 'https://via.placeholder.com/150',
//     },
//     {
//       id: 2,
//       title: 'Another Recipe',
//       description: 'This is another example recipe description.',
//       image: 'https://via.placeholder.com/150',
//     },
//   ]);
//   const listRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Pobieranie danych z backendu - zakomentowane
//     // const getFavoriteRecipes = async () => {
//     //   try {
//     //     const data = await fetchFavoriteRecipes();
//     //     setFavoriteRecipes(data);
//     //   } catch (error) {
//     //     console.error(error);
//     //   }
//     // };
//     // getFavoriteRecipes();
//   }, []);

//   const onDeleteHandler = async id => {
//     // Zakomentowana funkcja usuwania
//     // try {
//     //   await deleteFavoriteRecipe(id);
//     //   setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.id !== id));
//     // } catch (error) {
//     //   console.error(error);
//     // }
//     setFavoriteRecipes(favoriteRecipes.filter(recipe => recipe.id !== id)); // Usuwanie lokalnie
//   };

//   const viewRecipeHandler = id => {
//     navigate(`/recipes/${id}`); // Przekierowanie do strony przepisu
//   };

//   return (
//     <section className={`${styles.section} ${styles.container}`}>
//       <div className={styles.title}>Favorites</div>
//       {favoriteRecipes.length === 0 ? (
//         <EmptyState />
//       ) : (
//         <div className={styles.list} ref={listRef}>
//           {favoriteRecipes.map(recipe => (
//             <div className={styles.recipeCard} key={recipe.id}>
//               <img
//                 src={recipe.image}
//                 alt={recipe.title}
//                 className={styles.recipeImage}
//               />
//               <h3 className={styles.recipeTitle}>{recipe.title}</h3>
//               <p className={styles.recipeDescription}>{recipe.description}</p>
//               <button
//                 className={styles.deleteIcon}
//                 onClick={() => onDeleteHandler(recipe.id)}
//               >
//                 🗑️
//               </button>
//               <button
//                 className={styles.viewRecipeButton}
//                 onClick={() => viewRecipeHandler(recipe.id)}
//               >
//                 See Recipe
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default FavoritesPage;
