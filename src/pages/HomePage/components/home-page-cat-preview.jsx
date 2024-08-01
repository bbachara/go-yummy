import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
//import { useLocation, Link } from "react-router-dom";
//import { fetchPopularCategories } from "";
import css from '';

export const PopularCategories = () => {
  const [category, setCategory] = useState([]);
  // const location = useLocation(); - what does it do?

  useEffect(() => {
    fetchPopularCatgories()
      .then(({ results }) => {
        setCategory(results);
      })
      .catch(() => {
        // Notiflix.Notify.failure("Error fetching data"); can it stay?
      });
  }, []);

  return (
    <div className="css.previewCategories">
      {category.map(
        ({
          id,
          popularCategotyName,
          popularCategotyRecipes,
          popularCategotyImage,
        }) => (
          <div key={id} className={css.popularCategory}>
            <h3 className={css.popularCategoryHeading}></h3>
            <ul className={css.popularCategoryUl}>
              <Link to={`/category/${id}`} state={{ from: location }}>
                <li className={css.popularCategoryLi}>
                  <div className={css.imgDiv}>
                    <img
                      //alt="photo of a dish" possibly alt will be in the api
                      src={``}
                    />
                  </div>
                </li>
                <p className={css.movieTitle}>{title}</p>
              </Link>
            </ul>
            <button className={seeAll}>See all</button>
          </div>
        )
      )}
      <button className={previewCategoriesOtherCategories}>
        Other categories
      </button>
    </div>
  );
};
