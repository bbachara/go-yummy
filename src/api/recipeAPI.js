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
    console.log('Response in:',response.data)
    return response.data
  } catch (error) {
    console.error('Failed to fetch recipe:', error);
    throw error;
  }
};


export default getRecipeById;
