import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const newFavorite = action.payload;
      const existingFavorite = state.find(favorite => favorite.name === newFavorite.name);
      if (!existingFavorite) {
        state.push(newFavorite);
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
    removeFavorite: (state, action) => {
      const favoriteToRemove = action.payload;
      const updatedFavorites = state.filter(favorite => favorite.name !== favoriteToRemove.name);
      state = updatedFavorites;
      localStorage.setItem('favorites', JSON.stringify(state));
    }
  }
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
