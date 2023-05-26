function Card({ card, onCardClick }) {

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__item">
      <img className="elements__pic"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick} />
      <button className="elements__remove" type="button" aria-label="Удалить"></button>
      <div className="elements__description">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like-group">
          <button className="elements__like" type="button" aria-label="Нравится"></button>
          <span className="elements__span"></span>
        </div>
      </div>
    </li>
  );
}

export default Card;
