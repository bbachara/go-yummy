       import axios from 'axios';

const BASE_URL = 'https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/';

export const fetchPopularCategories = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}recipes/category-list`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`, // użycie tokena do autoryzacji
      },
    });
    return response.data.data.categoy; // zwracamy listę kategorii
  } catch (error) {
    console.error('Failed to fetch popular categories:', error);
    throw error;
  }
};

export const fetchRecipesByCategory = async (category, token) => {
  try {
    const response = await axios.get(`${BASE_URL}recipes/${category}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data; // zwracamy listę potraw z danej kategorii
  } catch (error) {
    console.error(`Failed to fetch recipes for category ${category}:`, error);
    throw error;
  }
};
