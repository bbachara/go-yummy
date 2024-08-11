import React, { useState } from 'react';
import styles from './IngredientForm.module.css';

const IngredientForm = ({ ingredients, setIngredients }) => {
  const [ingredientCount, setIngredientCount] = useState(ingredients.length);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '', unit: 'tbs' }]);
    setIngredientCount(ingredientCount + 1);
  };

  const handleRemoveIngredient = () => {
    if (ingredientCount > 0) {
      setIngredients(ingredients.slice(0, -1));
      setIngredientCount(ingredientCount - 1);
    }
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = ingredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [field]: value } : ingredient
    );
    setIngredients(newIngredients);
  };

  return (
    <div className={styles.ingredientsSection}>
      <div className={styles.headerContainer}>
        <h3>Ingredients</h3>
        <div className={styles.counterContainer}>
          <button type="button" onClick={handleRemoveIngredient} className={styles.counterBtn}>-</button>
          <span className={styles.counter}>{ingredientCount}</span>
          <button type="button" onClick={handleAddIngredient} className={styles.counterBtn}>+</button>
        </div>
      </div>
      {ingredients.map((ingredient, index) => (
        <div key={index} className={styles.ingredientItem}>
          <input
            type="text"
            value={ingredient.name}
            onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
            placeholder="Ingredient Name"
            className={styles.ingredientInput}
          />
          <div className={styles.quantityUnitContainer}>
            <input
              type="text"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
              placeholder="Qty"
              className={styles.quantityInput}
            />
            <select
              value={ingredient.unit}
              onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
              className={styles.unitSelect}
            >
              <option value="tbs">tbs</option>
              <option value="cups">cups</option>
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="ml">ml</option>
              <option value="l">l</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IngredientForm;
