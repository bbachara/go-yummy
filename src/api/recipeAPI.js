import axios from 'axios';

const BASE_URL = 'https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/';

const getRecipeById = async (token, id) => {
  try {
    const response = await axios.get(`${BASE_URL}recipes/id/${id}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Response in:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch recipe:', error);
    throw error;
  }
};

// const getIngredientById = async (id) => {
//   try {
//     const response = await axios.get(`${BASE_URL}ingredients/id/${id}`);
//     return response.data;
//     console.log(response.data)
//   } catch (error) {
//     console.error('Failed to fetch ingredient:', error);
//     throw error;
//   }
// };

// const getRecipeById = async (token, id) => {
//   try {
//     const response = await axios.get(`${BASE_URL}recipes/id/${id}`, {
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const recipe = response.data;
//     const ingredientsPromises = recipe.ingredients.map(async (ingredient) => {
//       const fullIngredient = await getIngredientById(ingredient.id.$oid);
//       return {
//         ...fullIngredient,
//         measure: ingredient.measure,
//       };
//     });
//     const fullIngredients = await Promise.all(ingredientsPromises);
//     recipe.ingredients = fullIngredients;
//     return recipe;
//   } catch (error) {
//     console.error('Failed to fetch recipe:', error);
//     throw error;
//   }
// };

export default getRecipeById;
