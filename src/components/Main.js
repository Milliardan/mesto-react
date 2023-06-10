import React from "react";

import Card from "./Card";
import defaultAvatar from '../images/avatar.png';

import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-overlay" onClick={onEditAvatar}>
          <img className="profile__avatar"
            src={currentUser.avatar ?? defaultAvatar}
            alt="Аватар пользователя" />
        </div>

        <div className="profile__info">
          <div className="profile__wrap">
            <h1 className="profile__title">{currentUser.name ?? ". . ."}</h1>
            <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить изображения" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>

    </main>
  );
}

export default Main;