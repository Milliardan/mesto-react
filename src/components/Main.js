import React from "react";
import api from "../utils/api";
import Card from "./Card";
import defaultAvatar from '../images/avatar.png';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [userAvatar, setUserAvatar] = React.useState(defaultAvatar);
  const [userName, setUserName] = React.useState('. . .');
  const [userDescription, setUserDescription] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch(err => console.error(err));

    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-overlay" onClick={onEditAvatar}>
          <img className="profile__avatar"
            src={userAvatar}
            alt="Аватар пользователя" />
        </div>

        <div className="profile__info">
          <div className="profile__wrap">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
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
            />
          ))}
        </ul>
      </section>

    </main>
  );
}

export default Main;