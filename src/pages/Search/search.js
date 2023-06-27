import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitialPokemonData } from "../../app/actionCreator/getInitialPokemonData";
import "./search.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/loader";
import PokemonCard from "../../components/Card/PokemonCard";
import Pagination from "../../components/Pagination/Pagination";

const Search = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemon.pokemonList);
  const isLoading = useSelector((state) => state.pokemon.isLoading);
  const error = useSelector((state) => state.pokemon.error);
  const [cardsPerPage, setCardsPerPage] = useState(
    parseInt(localStorage.getItem("cardsPerPage")) || 8
  );
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 1
  );
  const totalCards = 200;
  const [activeCard, setActiveCard] = useState(""); // New state for active card

  useEffect(() => {
    dispatch(
      getInitialPokemonData({
        limit: cardsPerPage,
        offset: (currentPage - 1) * cardsPerPage,
      })
    );
  }, [cardsPerPage, currentPage, dispatch]);

  useEffect(() => {
    localStorage.setItem("cardsPerPage", cardsPerPage);
  }, [cardsPerPage]);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="homepage-container">
      <div className="pokemon-container-wrapper">
        <div className="pokemon-container">
          {pokemonList.map((pokemon) => (
            <Link
              to={`/pokemon/${pokemon.name}`}
              key={pokemon.name}
              className={`search-card ${activeCard === pokemon.name ? "active" : ""}`} // Add active class based on activeCard state
              onClick={() => setActiveCard(pokemon.name)} // Set the activeCard state on card click
            >
              <PokemonCard
                pokemon={pokemon}
                imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                  pokemon.url.split("/")[6]
                }.svg`}
                alt={pokemon.name}
              />
            </Link>
          ))}
        </div>
      </div>
      <Pagination
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setCardsPerPage={setCardsPerPage}
        totalCards={totalCards}
      />
    </div>
  );
};

export default Search;
