import React, { useState, useEffect } from "react";
import coloredheart from "../../assets/images/coloredstar.png";
import blankheart from "../../assets/images/blankstar.png";
import Message from "../message/message";
import "./FavoriteButton.css";
import pingSound from "../../assets/audio/addedMsg.mp3";
import removedMsgSound from "../../assets/audio/removed.mp3";

const FavoriteButton = ({ pokemonData }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [addedToFavorites, setAddedToFavorites] = useState(false);
  const [removedFromFavorites, setRemovedFromFavorites] = useState(false);
  const audio = new Audio(pingSound);
  const audio2 = new Audio(removedMsgSound);
  const playPingSound = () => {
    audio.play();
  };
  const playRemovedMsgSound = () => {
    audio2.play();
  };
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyAdded = favorites.some(
      (favorite) => favorite.name === pokemonData?.name
    );
    setIsFavorited(isAlreadyAdded);
  }, [pokemonData]);

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorited) {
      const updatedFavorites = favorites.filter(
        (favorite) => favorite.name !== pokemonData?.name
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorited(false);
      setAddedToFavorites(false);
      setRemovedFromFavorites(true);
      playRemovedMsgSound();
    } else {
      const newFavorite = {
        name: pokemonData?.name,
        avatar: pokemonData?.sprites?.other?.dream_world?.front_default,
        weight: pokemonData?.weight,
        height: pokemonData?.height,
        types: pokemonData?.types,
        abilities: pokemonData?.abilities,
        stats: pokemonData?.stats,
      };
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, newFavorite])
      );
      setIsFavorited(true);
      setAddedToFavorites(true);
      playPingSound();
      setRemovedFromFavorites(false);
    }
  };

  return (
    <div>
      <div className="favorites-button">
        <button onClick={handleAddToFavorites}>
          {isFavorited ? (
            <img src={coloredheart} alt="Colored heart" />
          ) : (
            <img src={blankheart} alt="Blank heart" />
          )}
        </button>
        {(addedToFavorites && <Message msg={`Added to favorites`} />) || (
          <audio src={pingSound} />
        )}
        {(removedFromFavorites && (
          <Message msg={`Removed from favorites`} />
        )) || <audio src={removedMsgSound} />}
      </div>
    </div>
  );
};

export default FavoriteButton;
