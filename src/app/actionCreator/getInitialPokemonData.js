import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonAPI } from "../../utils/constants";

export const getInitialPokemonData = createAsyncThunk(
  "pokemon/getData",
  async (params) => {
    const { limit, offset } = params;
    try {
      const response = await axios.get(
        `${pokemonAPI}/pokemon?limit=${limit}&offset=${offset}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);
