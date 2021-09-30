import React from "react";

function FormInput({
  FormInputTitle,
  FormInputName,
  FormInputError,
  FormInputErrorName,
  FormInputType,
  FormInputId,
  PasswordInput
}) {
  const [inputValue, setInputValue] = React.useState("");

  function handleInputValueChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <p className='form-input-title'>{FormInputTitle}</p>
      <input
        required
        type={FormInputType}
        minLength="3"
        maxLength="50"
        name={FormInputName}
        onChange={handleInputValueChange}
        value={inputValue}
        id={FormInputId}
        className={`form-input ${PasswordInput}`}
      />
      <span id={FormInputError} className='form-input-error'>{FormInputErrorName}</span>
    </>
  );
}

export default FormInput;
