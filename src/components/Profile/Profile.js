import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm";

function Profile({ exit, editProfile }) {
  const [identicalValues, setIdenticalValues] = React.useState(false);
  const userInformation = React.useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  React.useEffect(() => resetForm({}), [resetForm]);

  const { userName, userEmail } = values;

  function patchProfile(e) {
    e.preventDefault();
    editProfile(userName, userEmail)
    setIdenticalValues(false)
  }

  function comparisonValues() {
    if (
      userInformation.user.name !== userName &&
      userName !== undefined &&
      userInformation.user.email !== userEmail &&
      userEmail !== undefined
    ) {
      setIdenticalValues(true);
    } else {
      setIdenticalValues(false);
    }
  }

  React.useEffect(() => {
    comparisonValues();
  }, [values]);

  function logout() {
    exit();
  }
  return (
    <main className="profile">
      <form className="profile-form" onSubmit={patchProfile}>
        <h1 className="profile-form__title">{`Привет, ${userInformation.user.name}`}</h1>
        <label className="profile-form__label">
          Имя
          <input
            required
            className="profile-form__input"
            /* defaultValue={userInformation.user.name} */
            minLength="3"
            maxLength="50"
            name="userName"
            type="name"
            value={userName || userInformation.user.name}
            onChange={handleChange}
          />
        </label>
        <span className="profile-form__error">{errors.userName}</span>
        <label className="profile-form__label">
          E-mail
          <input
            required
            className="profile-form__input"
            /* defaultValue={userInformation.user.email} */
            minLength="3"
            maxLength="50"
            name="userEmail"
            type="email"
            value={userEmail || userInformation.user.email}
            placeholder={userInformation.user.email}
            onChange={handleChange}
          />
        </label>
        <span className="profile-form__error">{errors.userEmail}</span>
        {!identicalValues || !isValid ? <span className="profile-form__error profile-form__error_values">
          Введите новые значения имени и email
        </span> : ''}
        <button
          type="submit"
          className={`button profile-form__button ${
            !identicalValues || !isValid ? "profile-form__button_disabled" : ""
          }`}
          disabled={!identicalValues || !isValid}
        >
          {!identicalValues || !isValid ? "Редактировать" : "Сохранить"}
        </button>

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
