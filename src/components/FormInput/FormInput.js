import React from "react";

function FormInput({
  FormInputTitle,
  /* FormInputName, */
  FormInputError,
  FormInputErrorName,
  FormInputType,
  FormInputId,
  PasswordInput,
  handleInputValueChange,

  inputValue,
  inputName,
}) {
  function handleInputValue(e) {
    handleInputValueChange(e);
  }

  return (
    <>
      <p className="form-input-title">{FormInputTitle}</p>
      <input
        required
        type={FormInputType}
        minLength={inputName === "password" ? "3" : "2"}
        maxLength="30"
        onChange={handleInputValue}
        value={inputValue}
        name={inputName}
        id={FormInputId}
        className={`form-input ${PasswordInput}`}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect='off'
      />
      <span id={FormInputError} className="form-input-error">
        {FormInputErrorName}
      </span>
    </>
  );
}

export default FormInput;
