import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { fetchPopularCategories } from '../../../api/homePageAPI';
import css from '../Home.module.css';

export const PopularCategories = () => {
  const [categories, setCategories] = useState([]);

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
      <ul className={css.popularCategoryUl}>
        {categories.map(({ _id, title, category, preview }) => (
          <li key={_id} className={css.popularCategoryLi}>
            <div className={css.popularCategoryHeader}>
              <h3 className={css.popularCategoryHeading}>{category}</h3>
            </div>
            <ul className={css.popularRecipeUl}>
              <li className={css.popularRecipeLi}>
                <img
                  className={css.popularRecipeImg}
                  alt="dish"
                  src={preview}
                  width="100%"
                  height="100%"
                />
                <div className={css.popularRecipeName}>
                  <a
                    href="https://www.google.pl/"
                    className={css.popularRecipeLink}
                  >
                    {title}
                  </a>
                </div>
              </li>
            </ul>
            <button className={css.seeAll}>See all</button>
          </li>
        ))}
      </ul>
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
