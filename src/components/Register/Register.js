import React, { useEffect } from "react";
import Form from "../Form/Form";
import { registerData, regiterInputData } from "../../constants/constants";
import FormInput from "../FormInput/FormInput";
import { useFormWithValidation } from "../../hooks/useForm";

function Register({ registration }) {
  const { title, buttonName, description, link, linkName } = registerData;

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => resetForm({}), [resetForm]);

  const { name, email, password } = values;

  function handleSubmit() {
    registration(name, email, password);
  }

  return (
    <div className="register">
      <Form
        name={buttonName}
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
          FormInputErrorName={errors.name}
          FormInputType={regiterInputData[0].FormInputType}
          FormInputId={regiterInputData[0].FormInputId}
          handleInputValueChange={handleChange}
          inputValue={name || ""}
          inputName="name"
        ></FormInput>
        <FormInput
          FormInputTitle={regiterInputData[1].FormInputTitle}
          FormInputError={regiterInputData[1].FormInputError}
          FormInputErrorName={errors.email}
          FormInputType={regiterInputData[1].FormInputType}
          FormInputId={regiterInputData[1].FormInputId}
          handleInputValueChange={handleChange}
          inputValue={email || ""}
          inputName="email"

          PatternInput={regiterInputData[1].PatternInput}
        ></FormInput>
        <FormInput
          FormInputTitle={regiterInputData[2].FormInputTitle}
          FormInputError={regiterInputData[2].FormInputError}
          FormInputErrorName={errors.password}
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
