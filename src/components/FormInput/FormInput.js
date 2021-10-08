import React from "react";

function FormInput({
  FormInputTitle,
  FormInputName,
  FormInputError,
  FormInputErrorName,
  FormInputType,
  FormInputId,
  PasswordInput,
  handleInputValueChange
}) {
  /* const [inputValue, setInputValue] = React.useState(""); */

  function handleInputValue(e) {
    handleInputValueChange(e.target.value);
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
        onChange={handleInputValue}
        /* value={inputValue} */
        id={FormInputId}
        className={`form-input ${PasswordInput}`}
        autoComplete='none'
      />
      <span id={FormInputError} className='form-input-error'>{FormInputErrorName}</span>
    </>
  );
}

export default FormInput;
