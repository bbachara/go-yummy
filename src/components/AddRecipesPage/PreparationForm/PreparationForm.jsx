import React from 'react';
import styles from './PreparationForm.module.css';

const PreparationForm = ({ preparation, setPreparation }) => {
  return (
    <div className={styles.preparationSection}>
      <textarea
        placeholder="Recipe Preparation"
        value={preparation}
        onChange={(e) => setPreparation(e.target.value)}
        className={styles.textarea}
      ></textarea>
    </div>
  );
};

export default PreparationForm;