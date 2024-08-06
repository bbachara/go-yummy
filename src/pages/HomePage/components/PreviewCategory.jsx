import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { fetchPopularCategories } from '../../../api/homePageAPI';
import css from '../Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PopularCategories = () => {
  const [popularCategories, setPopularCategories] = useState([]);
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    const getCategories = async () => {
      const getData = await getCategoryList(token);
      setPopularCategories(getData);
    };
    getCategories();
  }, [token]);

  useEffect(() => {
    fetchPopularCategories()
      .then(({ data }) => {
        setCategories(data.results);
      })
      .catch(() => {
        Notiflix.Notify.failure('Error fetching data');
      });
  }, []);

  return (
    <div className={css.previewCategories}>
      <previewCategoryCard
        title="Breakfast"
        category="breakfastRecipes"
      ></previewCategoryCard>{' '}
      <previewCategoryCard
        title="Miscellaneous"
        category="miscellaneousRecipes"
      ></previewCategoryCard>
      <previewCategoryCard
        title="Chicken"
        category="chickenRecipes"
      ></previewCategoryCard>
      <previewCategoryCard
        title="Desserts"
        category="dessertRecipes"
      ></previewCategoryCard>
      <button className={css.previewCategoriesOtherCategories}>
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
