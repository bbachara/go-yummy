import React from 'react';
import styles from './PreparationForm.module.css';

const PreparationForm = ({ preparation, setPreparation, onSubmit }) => {
  return (
    <div className={styles.preparationSection}>
      <h3>Recipe Preparation</h3>      
      <textarea
        placeholder="Enter recipe"
        value={preparation}
        onChange={(e) => setPreparation(e.target.value)}
        className={styles.textarea}
      ></textarea>
      <button
        type="button"
        onClick={onSubmit}
        className={styles.addButton}
      >
        Add
      </button>          
    </div>
  );
};

export default PreparationForm;