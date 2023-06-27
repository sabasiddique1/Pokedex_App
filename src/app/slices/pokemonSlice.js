
import { createSlice } from "@reduxjs/toolkit";
import { getInitialPokemonData } from "../actionCreator/getInitialPokemonData";
const initialState = {
  pokemonList: [],
  pokemonWithImages: [],
  isLoading: false,
  error: null,
};

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(getInitialPokemonData.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getInitialPokemonData.fulfilled, (state, action) => {
          state.isLoading = false;
          state.pokemonList = action.payload.results;
        })
        .addCase(getInitialPokemonData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })
        
    },
  });
  
// eslint-disable-next-line
  export const {} = pokemonSlice.actions;
