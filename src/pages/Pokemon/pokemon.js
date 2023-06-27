import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../components/hooks/hooks";
import Loader from "../../components/Loader/loader";
import "./pokemon.css";
import { typeColors } from "../../assets/styles/typeColors";

import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
const Pokemon = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);
  const { pokemon } = useParams();
  const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const { data, err } = useFetch(pokeApi);

  useEffect(() => {
    setLoading(true);
    if (data) {
      setLoading(false);
      setPokemonData(data);
    }
    if (err) {
      setLoading(false);
      setError(err);
    }
  }, [data, err]);

  let bgColor;
  if (pokemonData) {
    const type1 = pokemonData.types[0].type.name;
    const type2 = pokemonData.types[1] ? pokemonData.types[1].type.name : null;
    if (type2) {
      bgColor = `linear-gradient(to bottom right, ${typeColors[type1]} 5%, ${typeColors[type2]} 100%)`;
    } else {
      bgColor = typeColors[type1];
    }
  }
  return (
    <section className="container" style={{ background: bgColor }}>
      {loading && <Loader />}
      {pokemonData && (
        <div className="result-container">
          <div className="content-container">
            <div className="name-container">{pokemonData.name}</div>
            <div className="type-box-container">
              {pokemonData.types.map((type, index) => (
                <span
                  key={index}
                  className="type-box"
                  style={{
                    backgroundColor: typeColors[type.type.name.toLowerCase()],
                    boxShadow:
                      "rgba(0, 0, 0, 0.5) 0px -8px 12px inset, rgb(192 201 192 / 0%) 0px -1px 8px, rgba(70, 65, 65, 0.5) 0px -5px 11px inset",
                  }}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className="stats-container">
              {pokemonData.stats.map((stat, index) => (
                <div className="stat-box" key={index}>
                  <div className="stat-name">{stat.stat.name}</div>
                  <div className="stat-progress">
                    <div
                      className={`stat-progress-bar ${
                        stat.base_stat > 75
                          ? "high"
                          : stat.base_stat > 50
                          ? "medium"
                          : "low"
                      }`}
                      style={{ width: `${stat.base_stat}%` }}
                    >
                      <span className="stat-progress-label">
                        {stat.base_stat}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="details-container">
              <div className="height-container">
                <b>Height: &nbsp;</b>
                {pokemonData.height} m
              </div>
              <div className="weight-container">
                <b>Weight: &nbsp;</b>
                {pokemonData.weight} kg
              </div>
            </div>
            <div className="image-container">
              <img
                src={pokemonData.sprites.other.dream_world.front_default}
                alt={pokemonData.name}
              />
            </div>
          </div>
          <div className="favorites-button">
            <FavoriteButton pokemonData={pokemonData} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Pokemon;
