import React from 'react';
import { FaCamera } from 'react-icons/fa6';
import styles from './RecipeImage.module.css';

const RecipeImage = () => {
  return (
    <div className={styles.imageBox}>
      <FaCamera className={styles.uploadIcon} />
    </div>
  );
};

export default RecipeImage;