import React from "react";
import { Link } from "react-router-dom";
import trash from "../../assets/images/trash.png";
import view from "../../assets/images/eye.png";
import "./PokemonCard.css";
import buttonPush from "../../assets/audio/buttonPush.mp3";
const PokemonCard = ({
  pokemon,
  imgSrc,
  isFavorite,
  handleToggleFavorite,
  showWeightAndHeight,
}) => {
  const { name, weight, height } = pokemon;
  const audio = new Audio(buttonPush);
  const playButtonPush = () => {
    audio.play();
  };
  return (
    <div className="card card-four-per-row">
      <div className="buttons-container">
        {isFavorite && (
          <>
            <Link to={`/favorites/${name}`}>
              <img
                className="view-button"
                src={view}
                alt="View"
                onClick={playButtonPush}
              />
            </Link>
            <button onClick={() => handleToggleFavorite(name)}>
              <img className="delete-button" src={trash} alt="Delete" />
            </button>
          </>
        )}
      </div>
      <div className="card-body">
        <img className="pokemon-image" src={imgSrc} alt={pokemon.name} />
        <h3>{name}</h3>
        <div className="height-weight">
          {showWeightAndHeight && (
            <>
              <p className="weight">Weight:{weight}kg</p>
              <p className="height">Height:{height}m</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
