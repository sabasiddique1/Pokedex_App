import { useState, useEffect } from "react";

export const useFetch = (pokeApi) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemons = async (pokeApi) => {
      try {
        const res = await fetch(pokeApi);
        if (!res.ok) {
          // eslint-disable-next-line
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "An error occurred" : res.statusText,
          };
        }
        const dataJson = await res.json();
        setIsPending(false);
        setData(dataJson);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(err.message || "An error occurred");
      }
    };
    getPokemons(pokeApi);
  }, [pokeApi]);
  return { data, isPending, error };
};
// eslint-disable-next-line
