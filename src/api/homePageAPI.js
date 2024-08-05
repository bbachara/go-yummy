import axios from 'axios';

const BASE_URL = 'https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/api/';
const Authorisation = 'Bearer {token}';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: Authorisation,
  },
};

export const fetchPopularCategories = async () => {
  const endUrl = 'recipes/popular';
  const url = `${BASE_URL}${endUrl}?`;
  const responsePopularCategories = await axios(url, options);
  return responsePopularCategories.data;
};
