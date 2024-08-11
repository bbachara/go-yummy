import React from 'react';
import styles from './RecipeImage.module.css';

const RecipeImage = () => {
  return (
    <div className={styles.imageBox}>
      <span className={styles.uploadIcon}>📷</span>
    </div>
  );
};

export default RecipeImage;