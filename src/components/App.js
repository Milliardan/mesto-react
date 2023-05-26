import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <label className="popup__field">
          <input
            type="url"
            className="popup__input avatar-country"
            id="input-avatar"
            placeholder="Ссылка на аватар"
            name="avatar"
            required />
          <span id="input-avatar-error" className="popup__error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <label className="popup__field">
          <input
            type="text"
            className="popup__input popup__input_field_name"
            placeholder="Имя"
            name="name"
            id="input-name"
            minLength="2"
            maxLength="40"
            required />
          <span className="popup__error"></span>
        </label>
        <label className="popup__field">
          <input
            type="text"
            className="popup__input popup__input_field_about"
            id="input-job"
            placeholder="О себе"
            name="about"
            minLength="2"
            maxLength="200"
            required />
          <span className="popup__input-error job-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <label className="popup__field">
          <input
            type="text"
            className="popup__input popup__input_field_heading"
            id="input-title"
            placeholder="Название"
            name="name"
            minLength="2"
            maxLength="30"
            required />
          <span className="popup__input-error title-input-error"></span>
        </label>
        <label className="popup__field">
          <input
            type="url"
            className="popup__input popup__input_field_link"
            id="input-link"
            placeholder="Ссылка на картинку"
            name="link"
            required />
          <span className="popup__error" id="input-link-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
        isOpen={false}
        onClose={closeAllPopups}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;