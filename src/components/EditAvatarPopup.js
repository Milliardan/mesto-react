import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  /**
   * Сброс значений инпутов при открытии/закрытии попапа или при смене пользователя
   */
  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          type="url"
          className="popup__input avatar-country"
          id="input-avatar"
          placeholder="Ссылка на аватар"
          name="avatar"
          required
          ref={avatarRef}
        />
        <span id="input-avatar-error" className="popup__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
