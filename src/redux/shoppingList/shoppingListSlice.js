import { createSlice } from '@reduxjs/toolkit';

// import of all the thunk operations
import {
  fetchShoppingListThunkOperation,
  addShoppingListItemThunkOperation,
  deleteShoppingListItemThunkOperation,
} from '../shoppingList/shoppingListOperations';

const shoppingListInitialState = {
  items: [],
  error: null,
  isLoading: false,
};

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: shoppingListInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // fetch reducers
      .addCase(fetchShoppingListThunkOperation.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchShoppingListThunkOperation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.data.data.result[0].list;
      })
      .addCase(fetchShoppingListThunkOperation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // add  reducers
      .addCase(addShoppingListItemThunkOperation.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addShoppingListItemThunkOperation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload.data.result.list[0]);
      })
      .addCase(addShoppingListItemThunkOperation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // deleteReducers
      .addCase(
        deleteShoppingListItemThunkOperation.pending,
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addCase(
        deleteShoppingListItemThunkOperation.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          console.log(action.payload.data.id);
          const index = state.items.findIndex(
            item => item._id === action.payload.data.id
          );
          console.log(index);
          state.items.splice(index, 1);
        }
      )
      .addCase(
        deleteShoppingListItemThunkOperation.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
