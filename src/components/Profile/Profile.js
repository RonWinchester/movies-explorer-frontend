import React from "react";

function Profile({ exit }) {
  const [save, setSave] = React.useState(false);

  function logout() {
    exit();
  }
  return (
    <main className="profile">
      <form className="profile-form">
        <h1 className="profile-form__title">Привет, Виталий!</h1>
        <label className="profile-form__label">
          Имя
          <input
            required
            className="profile-form__input"
            defaultValue="Виталий"
            minLength="3"
            maxLength="50"
            name="name-profile"
            type="name"
          />
        </label>
        <label className="profile-form__label">
          E-mail
          <input
            required
            className="profile-form__input"
            defaultValue="pochta@yandex.ru"
            minLength="3"
            maxLength="50"
            name="email-profile"
            type="email"
          />
        </label>
        {save ? (
          <button type="submit" className=" button profile-form__button">
            Сохранить
          </button>
        ) : (
          <button type="submit" className=" button profile-form__button">
            Редактировать
          </button>
        )}
        <button
          type="button"
          className=" button profile-form__button profile-form__button_logOut"
          onClick={logout}
        >
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}

export default Profile;
