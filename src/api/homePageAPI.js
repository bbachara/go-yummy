import axios from 'axios';

const BASE_URL = 'https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/';

export const fetchPopularCategories = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}recipes/category-list`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data); 
    return response.data.data.categoy; // Zmieniamy na 'categoy', aby działało, ale logujemy, co dokładnie API zwraca
  } catch (error) {
    console.error('Failed to fetch popular categories:', error);
    throw error;
  }
};

export const fetchRecipesByCategory = async (category, token) => {
  try {
    const response = await axios.get(`${BASE_URL}recipes/category/${category}`, {

      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data; 
  } catch (error) {
    console.error(`Failed to fetch recipes for category ${category}:`, error);
    throw error;
  }
};
 

//-------------------------------------Shoppinglist poniżej--------// 

export const fetchShoppingList = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}shopping-list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch shopping list:', error);
    throw error;
  }
};

export const removeItem = async (itemId, token) => {
  try {
    await axios.delete(`${BASE_URL}shopping-list/${itemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Failed to remove item:', error);
    throw error;
  }
};