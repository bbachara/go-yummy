
// import React, { Suspense, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Outlet, useNavigate, useParams } from 'react-router-dom';
// import { Tabs, Tab } from '@mui/material';
// import { selectCategories } from 'redux/recipes/recipes.selectors';
// import { getCategoriesThunk } from 'redux/recipes/recipes.thunk';
// import MainLoader from 'components/MainLoader/MainLoader';
// import { useScrollToTop } from 'hooks/useScrollToTop';
// import styles from './CategoriesPage.module.css';
 
// export default function CategoriesPage() {
//   useScrollToTop();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { categoryName } = useParams();
//   const { data: categories } = useSelector(selectCategories);
//   const [selectedCategory, setSelectedCategory] = useState(-1);

//   useEffect(() => {
//     const index = categories.findIndex(
//       c => categoryName && c.toLowerCase() === categoryName.toLowerCase()
//     );

//     setSelectedCategory(index === -1 ? 0 : index);
//   }, [categories, categoryName]);

//   useEffect(() => {
//     dispatch(getCategoriesThunk());
//   }, [dispatch]);

//   const changeCategoryHandler = (_evt, newValue) => {
//     setSelectedCategory(newValue);
//   };

//   useEffect(() => {
//     const category = categories[selectedCategory];
//     if (category) navigate(`${category}`, { replace: true });
//   }, [categories, navigate, selectedCategory]);

//   return (
//     <section className={styles.categoriesPageSection}>
//       <div className={styles.container}>
//         <h2 className={styles.categoriesPageTitle}>Categories</h2>
//         <div className={styles.tabsWrapper}>
//           {selectedCategory > -1 && (
//             <Tabs
//               onChange={changeCategoryHandler}
//               value={selectedCategory}
//               variant="scrollable"
//               scrollButtons="auto"
//               aria-label="Tabs categories list"
//               className={styles.tabs}
//             >
//               {categories.map(c => (
//                 <Tab
//                   key={c}
//                   label={c}
//                   className={styles.tab}
//                 />
//               ))}
//             </Tabs>
//           )}
//         </div>
//         <Suspense fallback={<MainLoader />}>
//           <Outlet />
//         </Suspense>
//       </div>
//     </section>
//   );
// } 

//------------------------------------------------------------------//
 
// import React, { useEffect, useState } from 'react';
// import { fetchPopularCategories } from '../../api/homePageAPI'; 
// import styles from './Categories.module.css';

// export default function CategoriesPage() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const getCategories = async () => {
//       try {
//         const data = await fetchPopularCategories(); // Używamy funkcji do pobrania popularnych kategorii
//         setCategories(data);
//       } catch (error) {
//         console.error('Failed to fetch categories:', error);
//       }
//     };

//     getCategories();
//   }, []); 


//   return (
//     <section className={styles.categoriesPageSection}>
//       <div className={styles.container}>
//         <h2 className={styles.categoriesPageTitle}>Popular Categories</h2>
//         <div className={styles.tabsWrapper}>
//           {categories.length > 0 ? (
//             <ul>
//               {categories.map((category, index) => (
//                 <li key={index}>{category.name}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>Loading categories...</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

//-------------------------------------------------------------------------- 


import React, { useEffect, useState } from 'react';
import { fetchPopularCategories } from '../../api/homePageAPI'; 
import styles from './Categories.module.css';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchPopularCategories(); // Użycie funkcji do pobrania popularnych kategorii
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    getCategories();
  }, []); 

  return (
    <section className={styles.categoriesPageSection}>
      <div className={styles.container}>
        <h2 className={styles.categoriesPageTitle}>Popular Categories</h2>
        <div className={styles.tabsWrapper}>
          {categories.length > 0 ? (
            <ul>
              {categories.map((category, index) => (
                <li key={index}>{category.name}</li>
              ))}
            </ul>
          ) : (
            <p>Loading categories...</p>
          )}
        </div>
      </div>
    </section>
  );
}
