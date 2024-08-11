import axios from 'axios';

const BASE_URL = 'https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/';

export const fetchPopularCategories = async token => {
  try {
    const response = await axios.get(`${BASE_URL}recipes/category-list`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data.data.categoy; 
  } catch (error) {
    console.error('Failed to fetch popular categories:', error);
    throw error;
  }
};

export const fetchRecipesByCategory = async (category, token) => {
  try {
    const response = await axios.get(
      `${BASE_URL}recipes/category/${category}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
 
    return response.data.data;
  } catch (error) {
    console.error(`Failed to fetch recipes for category ${category}:`, error);
    throw error;
  }
};

//-------------------------------------Shoppinglist--------//

export const fetchShoppingList = async token => {
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

export const fetchIngredientById = async (id, token) => {
  try {
      const response = await axios.get(`${BASE_URL}ingredients/${id}`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
      return response.data.data; 
  } catch (error) {
      console.error('Failed to fetch ingredient:', error);
      throw error;
  } 
}; 




//----------------------- Search by text --------------

export async function fetchRecipesByText(q, token) {
  try {
    const endUrl = 'recipes/search';
    const searchParams = new URLSearchParams({ q });
    const response = await axios.get(`${BASE_URL}${endUrl}?${searchParams}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log('Recipes found by text:', response.data);
    return response.data;
  } catch (error) {
    // if (error.response) {
    //   console.error('Server Error:', error.response.data);
    //   console.error('Status:', error.response.status);
    //   console.error('Headers:', error.response.headers);
    // } else if (error.request) {
    //   console.error('No response received:', error.request);
    // } else {
    //   console.error('Error setting up request:', error.message);
    // }
    throw error;
  }
}
