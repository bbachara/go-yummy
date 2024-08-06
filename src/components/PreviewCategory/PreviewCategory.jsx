import css from './PreviewCategory.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchPopularCategories } from 'api/homePageAPI';
import { PreviewCategoryCard } from 'components/PreviewCategoryCard/PreviewCateogryCard';

export const PopularCategories = () => {
  const [popularCategories, setPopularCategories] = useState([]);
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    const getCategories = async () => {
      const dataPopularCategories = await fetchPopularCategories(token);
      setPopularCategories(dataPopularCategories);
    };
    getCategories();
  }, [token]);

  const breakfastCateogry = popularCategories.filter(
    popularCategory => popularCategory.category === 'Breakfast'
  );

  const miscellaneousCateogry = popularCategories.filter(
    popularCategory => popularCategory.category === 'Miscellaneous'
  );

  const chickenCategory = popularCategories.filter(
    popularCategory => popularCategory.category === 'Chicken'
  );

  const dessertCategory = popularCategories.filter(
    popularCategory => popularCategory.category === 'Dessert'
  );

  const otherCategoriesClick = () => {
    navigate(`/recipes/categories/`);
  };

  return (
    <div className={css.previewCategories}>
      {breakfastCateogry && (
        <PreviewCategoryCard title="Breakfast" category="breakfastCategory" />
      )}
      {miscellaneousCateogry && (
        <PreviewCategoryCard
          title="Miscellaneous"
          category="miscellaneousCateogry"
        />
      )}
      {chickenCategory && (
        <PreviewCategoryCard title="Chicken" category="chickenCategory" />
      )}
      {dessertCategory && (
        <PreviewCategoryCard title="Desserts" category="dessertCategory" />
      )}
      <button
        className={css.previewCategoriesOtherCategories}
        onClick={otherCategoriesClick}
      >
        Other categories
      </button>
    </div>
  );
};

// return (
//   <div className={css.previewCategories}>
//     {category.map(
//       ({
//         id,
//         popularCategotyName,
//         popularCategotyRecipes,
//         popularCategotyImage,
//       }) => (
//         <ul className={css.popularCateogryUl}>
//           <li className={css.popularCategoryLi}>
//             <h3 className={css.popularCategoryHeading}></h3>
//             <ul className={css.popularRecepieUl}>
//               <li className={css.popularRecipeLi}>
//                 <img
//                   //alt="photo of a dish" possibly alt will be in the api
//                   src={``}
//                 />
//                 <div className={css.popularRecipeName}></div>
//               </li>
//             </ul>
//           </li>
//           <button className={css.seeAll}>See all</button>
//         </ul>
//       )
//     )}
//     <button className={css.previewCategoriesOtherCategories}>
//       Other categories
//     </button>
//   </div>
// );
