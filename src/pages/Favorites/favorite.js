
import React, { useState } from "react";
import "./favorites.css";
import PokemonCard from "../../components/Card/PokemonCard";
import Message from "../../components/message/message";
import removedMsgSound from '../../assets/audio/removedMsg.mp3'
import trashSound from '../../assets/audio/trashSound.mp3' 
import buttonClick from '../../assets/audio/buttonClick.mp3'
import  {Link}  from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [message, setMessage] = useState("");
  const audio = new Audio(removedMsgSound);
  const playRemovedMsgSound = () => {
    audio.play();
  };
  const audio2 = new Audio(trashSound)
  const playTrashSound = () => {
    audio2.play()
  }
  const audio3 = new Audio(buttonClick)
  const playButtonClick = () => {
    audio3.play()
  }

  const handleDeleteFavorite = (name) => {
    const newFavorites = favorites.filter((favorite) => favorite.name !== name);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
    setMessage(`"${name}" - removed from favorites.`);
    playRemovedMsgSound();
  };

  const handleDeleteAllFavorites = () => {
    localStorage.removeItem("favorites");
    setFavorites([]);
    setMessage("All favorites removed.");
    playTrashSound();
  };

  return (
    <section className="fav-container">
      {message && <Message msg={message} />}
      {favorites.length === 0 ? (
        <div className="no-fav-yet">
          <p className="no-fav-p">No Favorites Yet.</p>
          <Link to='/pokemon'>
            <button className="no-fav-b" onClick={playButtonClick}>Add Favorite</button>
          </Link>
        </div>
      ) : (
        <>
          <audio src={removedMsgSound} />
          <button className="delete-all-button" onClick={handleDeleteAllFavorites}>
            Delete All
          </button>
        </>
      )}
      <div className="favorites-container">
        {favorites.map((favorite) => (
          <PokemonCard
            key={favorite.name}
            pokemon={favorite}
            isFavorite={true}
            handleToggleFavorite={handleDeleteFavorite}
            imgSrc={favorite.avatar}
            alt={favorite.name}
            showWeightAndHeight={true}
            playTrashSound={playTrashSound}
          />
        ))}
      </div>
    </section>
  );
};

export default Favorites;
