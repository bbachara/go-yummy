export const selectMyRecipes = state => state.ownRecipes.recipes;

export const selectIsLoadingMyRecipes = state => state.ownRecipes.isLoading;
export const selectCategoryList = state => state.recipes.categoryList;

export const selectTotalPageRecipe = state => {
    return Math.ceil(state.ownRecipes.total / 4);
};
export const selectPopularRecipes = state => state.recipes.popularRecipes;
export const selectIngredients = state => state.recipes.ingredientsList;
