import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favoriteSlice";
import {pokemonSlice} from "./slices/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    favorites: favoriteSlice.reducer
  },
});



