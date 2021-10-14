import React from "react";

function FormInput({
  FormInputTitle,
  FormInputError,
  FormInputErrorName,
  FormInputType,
  FormInputId,
  PasswordInput,
  handleInputValueChange,
  PatternInput,
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
        maxLength={inputName === "password" ? "" : "30"}
        onChange={handleInputValue}
        value={inputValue}
        name={inputName}
        id={FormInputId}
        className={`form-input ${PasswordInput}`}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect='off'

        pattern={PatternInput}
      />
      <span id={FormInputError} className="form-input-error">
        {FormInputErrorName}
      </span>
    </>
  );
}

export default FormInput;
