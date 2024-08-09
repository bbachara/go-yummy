import { fetchRecipesByCategory } from 'api/homePageAPI';

export const PreviewCategory = () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjE0YTkwZTEwNjA3YjQ3MGFmYjA5OSIsImVtYWlsIjoibWlrb2xhamJsYWpla0BnbWFpbC5jb20iLCJpYXQiOjE3MjMyMjYzMDIsImV4cCI6MTcyMzMzNDMwMn0.pyv0SUpeRc31UbPstzyC_32rbeaS8C1iH8vknG76Qyo';
  fetchRecipesByCategory('BEEF', token);
};
