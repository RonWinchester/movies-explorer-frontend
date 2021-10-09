import React, { useEffect } from "react";
import Form from "../Form/Form";
import { registerData, regiterInputData } from "../../constants/constants";
import FormInput from "../FormInput/FormInput";
import { useFormWithValidation } from "../../hooks/useForm";

function Register({ registration }) {
  const { title, name, description, link, linkName } = registerData;

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => resetForm({}), [resetForm]);

  const { userName, userEmail, password } = values;

  function handleSubmit() {
    registration(userName, userEmail, password);
  }

  return (
    <div className="register">
      <Form
        name={name}
        title={title}
        description={description}
        link={link}
        linkName={linkName}
        handleSubmit={handleSubmit}
        isValid={isValid}
      >
        <FormInput
          FormInputTitle={regiterInputData[0].FormInputTitle}
          FormInputError={regiterInputData[0].FormInputError}
          FormInputErrorName={errors.userName}
          FormInputType={regiterInputData[0].FormInputType}
          FormInputId={regiterInputData[0].FormInputId}
          handleInputValueChange={handleChange}
          inputValue={userName || ""}
          inputName="userName"
        ></FormInput>
        <FormInput
          FormInputTitle={regiterInputData[1].FormInputTitle}
          FormInputError={regiterInputData[1].FormInputError}
          FormInputErrorName={errors.userEmail}
          FormInputType={regiterInputData[1].FormInputType}
          FormInputId={regiterInputData[1].FormInputId}
          handleInputValueChange={handleChange}
          inputValue={userEmail || ""}
          inputName="userEmail"
        ></FormInput>
        <FormInput
          FormInputTitle={regiterInputData[2].FormInputTitle}
          FormInputError={regiterInputData[2].FormInputError}
          FormInputErrorName={errors.paswword}
          FormInputType={regiterInputData[2].FormInputType}
          FormInputId={regiterInputData[2].FormInputId}
          PasswordInput={regiterInputData[2].PasswordInput}
          handleInputValueChange={handleChange}
          inputValue={password || ""}
          inputName="password"
        ></FormInput>
      </Form>
    </div>
  );
}

export default Register;

/* {regiterInputData.map((input, index) => (
  <FormInput
    FormInputTitle={input.FormInputTitle}
    FormInputName={input.FormInputName}
    FormInputError={input.FormInputError}
    FormInputErrorName={input.FormInputErrorName}
    FormInputType={input.FormInputType}
    key={index}
    onValue={handleInputName}
    handleSubmit={handleSubmit}
  ></FormInput>
))} */
