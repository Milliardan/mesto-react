import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwner = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((person) => person._id === currentUser._id);
  const activeLikeButtonClassName = "elements__like_active";

  function handleCardClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (

    <li className="elements__item">
    <img className="elements__pic"
      src={card.link}
      alt={card.name}
      onClick={handleCardClick} />
      {isOwner && (
        <button type="button" 
        className="elements__remove"
          aria-label="Удалить"
          onClick={handleCardDelete}
        ></button>
      )}
    <div className="elements__description">
      <h2 className="elements__title">{card.name}</h2>
      <div className="elements__like-group">
        <button className={
              "elements__like " + (isLiked && activeLikeButtonClassName)
            } type="button" aria-label="Нравится" onClick={handleCardLike}></button>
        <span className="elements__span"></span>
      </div>
    </div>
  </li>
  );
}

export default Card;
