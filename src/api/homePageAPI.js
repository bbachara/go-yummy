import axios from 'axios';

const BASE_URL = ''; // based on api
const API_KEY = ''; // based on api
const Authorization = ''; // based on api
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: Authorization, // based on api
  },
};

export const fetchPopularCategories = async () => {
  const endUrl = ''; // based on backend
  const searchParams = new URLSearchParams({
    api_key: API_KEY, //based on backend
  });
  const url = `${BASE_URL}${endUrl}?${searchParams}`;
  const responsePopularCategories = await axios(url, options);
  return responsePopularCategories.data;
};
