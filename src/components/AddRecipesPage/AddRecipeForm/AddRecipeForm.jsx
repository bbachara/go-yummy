import React, { useState } from 'react';
import IngredientForm from '../IngredientForm/IngredientForm';
import PreparationForm from '../PreparationForm/PreparationForm';
import styles from './AddRecipeForm.module.css';

const AddRecipeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '', unit: 'tbs' }]);
  const [preparation, setPreparation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = { title, description, ingredients, preparation };
    console.log('New recipe:', recipe);
    onSubmit(recipe);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="title"
          placeholder="Enter item title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <textarea
          name="description"
          placeholder="Enter about recipe"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.inputGroup}>
        <select>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div className={styles.inputGroup}>
        <select>
          <option value="30">30 min</option>
          <option value="45">45 min</option>
          <option value="60">60 min</option>
          <option value="75">75 min</option>
          <option value="90">90 min</option>
        </select>
      </div>
      <IngredientForm ingredients={ingredients} setIngredients={setIngredients} />
      <PreparationForm preparation={preparation} setPreparation={setPreparation} />
      <button type="submit" className={styles.addButton}>Add</button>
    </form>
  );
};

export default AddRecipeForm;