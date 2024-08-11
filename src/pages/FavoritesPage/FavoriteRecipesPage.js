// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// import {
//   TitleH1,
//   SectionFavorite,
//   ContainerFavorite,
//   First,
//   Second,
//   Third,
//   WrapperSectionTitle,
// } from './FavoriteRecipesPage.styled';
// import { NotSearch } from './NotSearch/NotSearch';
// import Paginator from 'components/MyRecipesPage/Paginator/Paginator';
// import FavoriteRecipesList from './FavoriteRecipeList/FavoriteRecipeList';

// export default function FavoriteRecipesPage() {
//   const [favoriteRecipes, setFavoriteRecipes] = useState([]);
//   // const [error, setError] = useState('');

//   const token = useSelector(state => state.auth.token);

//   const itemsPerPage = 4;
//   return (
//     <>
//       <SectionFavorite>
//         <ContainerFavorite>
//           <WrapperSectionTitle>
//             <TitleH1>Favorite</TitleH1>
//             <First></First>
//             <Second></Second>
//             <Third></Third>
//           </WrapperSectionTitle>
//           {favoriteRecipes.length === 0 ? (
//             <NotSearch />
//           ) : favoriteRecipes.length > itemsPerPage ? (
//             <Paginator
//               data={favoriteRecipes}
//               itemsPerPage={itemsPerPage}
//               noMargin
//             >
//               {currentItems => {
//                 return (
//                   <FavoriteRecipesList
//                     recipe={currentItems}
//                     onDeleteRecipe={deleteFavoriteRecipe}
//                   />
//                 );
//               }}
//             </Paginator>
//           ) : (
//             <FavoriteRecipesList
//               recipe={favoriteRecipes}
//               onDeleteRecipe={deleteFavoriteRecipe}
//             />
//           )}
//         </ContainerFavorite>
//       </SectionFavorite>
//     </>
//   );
// }
