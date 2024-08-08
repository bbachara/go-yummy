import { createAsyncThunk } from "@reduxjs/toolkit";

export const RecipesAPI = {
  getPopularRecipes: async () => {
    const { data } = await axios.get(`/recipes?limit=4`);
    return data;
  },

  getAllCategories: async () => {
    const { data } = await axios.get(`/recipes/category/list`);
    return data;
  },

  getIngredients: async () => {
    const { data } = await axios.get(`/recipes/ingredients`);
    return data;
  }
};

export const getPopularRecipes = createAsyncThunk(
  'recipes/getPopular',
  async (_, thunkAPI) => {
    try {
      const response = await RecipesAPI.getPopularRecipes();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addOwnRecipe = createAsyncThunk(
    "ownRecipes/addOwnRecipe",
  async (formData, thunkAPI) => {
      try {
        const response = await OwnRecipesAPI.addOwnRecipe(formData);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);
export const getAllCategories = createAsyncThunk(
  'recipes/getAllCategories',
  async (_, thunkAPI) => {
    try {
      const response = await RecipesAPI.getAllCategories();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getIngredients = createAsyncThunk(
  'recipes/getIngredients',
  async (_, thunkAPI) => {
    try {
      const response = await RecipesAPI.getIngredients();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
}
)