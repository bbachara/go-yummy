import React from 'react';
import styles from './IngredientForm.module.css';

const IngredientForm = ({ ingredients, setIngredients }) => {
  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '', unit: 'tbs' }]);
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = ingredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [field]: value } : ingredient
    );
    setIngredients(newIngredients);
  };

  return (
    <div className={styles.ingredientsSection}>
      <h3>Ingredients</h3>
      {ingredients.map((ingredient, index) => (
        <div key={index} className={styles.ingredientItem}>
          <input
            type="text"
            value={ingredient.name}
            onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
            placeholder="Ingredient Name"
            className={styles.ingredientInput}
          />
          <input
            type="text"
            value={ingredient.quantity}
            onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
            placeholder="Quantity"
            className={styles.ingredientInput}
          />
          <select
            value={ingredient.unit}
            onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
            className={styles.ingredientSelect}
          >
            <option value="tbs">tbs</option>
            <option value="cups">cups</option>
            <option value="grams">grams</option>
            {/* Dodaj inne jednostki, które chcesz obsługiwać */}
          </select>
        </div>
      ))}
      <button type="button" onClick={handleAddIngredient} className={styles.addIngredientBtn}>+</button>
    </div>
  );
};

export default IngredientForm;