// import Notiflix from 'notiflix';
// import { useEffect } from 'react';
// //import { useLocation, Link } from "react-router-dom";
// import { fetchPopularCategories } from '';
import css from '../Home.module.css';

export const PopularCategories = () => {
  // const [category, setCategory] = useState([]);
  // const location = useLocation(); - what does it do?

  // useEffect(() => {
  //   fetchPopularCategories()
  //     .then(({ results }) => {
  //       setCategory(results);
  //     })
  //     .catch(() => {
  //       Notiflix.Notify.failure('Error fetching data');
  //     });
  // }, []);
  return (
    <div className={css.previewCategories}>
      <ul className={css.popularCategoryUl}>
        <li className={css.popularCategoryLi}>
          <div className={css.popularCategoryHeader}>
            <h3 className={css.popularCategoryHeading}>Breakfast</h3>
          </div>
          <ul className={css.popularRecipeUl}>
            <li className={css.popularRecipeLi}>
              <img
                className={css.popularRecipeImg}
                alt="dish"
                src="https://www.simplyrecipes.com/thmb/qQZKziOB59OIetXjapaxBvrFzZE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Easy-Banana-Bread-LEAD-2-2-63dd39af009945d58f5bf4c2ae8d6070.jpg"
                width="100%"
                height="100%"
              />
              <div className={css.popularRecipeName}>
                <a
                  href="https://www.google.pl/"
                  className={css.popularRecipeLink}
                >
                  Banana Bread
                </a>
              </div>
            </li>
          </ul>
          <button className={css.seeAll}>See all</button>
        </li>
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
