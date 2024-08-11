import React from 'react';
import styles from './MyRecipes.module.css';
import Vegetables from '../../assets/SearchPage/vegetable-fruit-basket-desktop.png';
import Vegetables2 from '../../assets/SearchPage/vegetable-fruit-basket-desktop@x2.png';
import VegetablesT from '../../assets/SearchPage/vegetable-fruit-basket-tablet.png';
import VegetablesT2 from '../../assets/SearchPage/vegetable-fruit-basket-tablet@x2.png';
import VegetablesM from '../../assets/SearchPage/vegetable-fruit-basket-mobile.png';
import VegetablesM2 from '../../assets/SearchPage/vegetable-fruit-basket-mobile@x2.png';

const MyRecipesPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>My Recipes</h1>
      <div className={styles.messageContainer}>
        <picture>
          <source srcSet={`${VegetablesM}, ${VegetablesM2} 2x`} media="(max-width: 599px)" />
          <source srcSet={`${VegetablesT}, ${VegetablesT2} 2x`} media="(min-width: 600px) and (max-width: 1199px)" />
          <source srcSet={`${Vegetables}, ${Vegetables2} 2x`} media="(min-width: 1200px)" />
          <img src={Vegetables} alt="Vegetable and Fruit Basket" className={styles.image} />
        </picture>
        <p className={styles.message}>
          You currently don't have any own recipes added. Let's add some!
        </p>
      </div>
    </div>
  );
};

export default MyRecipesPage;