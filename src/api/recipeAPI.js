import axios from 'axios';

const BASE_URL = 'https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/';

export async function getRecipeById(token, recipeId) {
  try {
    const response = await axios.get(`${BASE_URL}/recipes/id/${recipeId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Failed to fetch recipe:', error);
    throw error;
  }
}
