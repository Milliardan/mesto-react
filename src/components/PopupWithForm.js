import closeIcon from '../images/close-icon.svg';

function PopupWithForm({ name, title, buttonText, isOpen, onClose, children }) {

  return (
    <div className={`popup popup_type_${name}` + (isOpen && ' popup_opened')}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} noValidate>
          {children}
          <button className="popup__submit" type="submit">{buttonText}</button>
        </form>
        <button className="popup__close"
          type="button"
          aria-label="Закрыть" onClick={onClose}>
          <img className="popup__close-icon" src={closeIcon}
            alt="Кнопка закрытия всплывающего окна" /></button>
      </div>
    </div>
  );
}

export default PopupWithForm;