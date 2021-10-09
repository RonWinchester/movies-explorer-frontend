import React, { useEffect } from "react";
import { loginData, loginInputData } from "../../constants/constants";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import { useFormWithValidation } from "../../hooks/useForm";

function Login({ authorize }) {
  const { title, name, description, link, linkName } = loginData;

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => resetForm({}), [resetForm]);

  const { userEmail, password } = values;

  function handleSubmitLogin() {
    authorize(values.userEmail, values.password);
  }

  return (
    <div className="login">
      <Form
        name={name}
        title={title}
        description={description}
        link={link}
        linkName={linkName}
        selector="button-login_margin-top"
        handleSubmit={handleSubmitLogin}
        isValid={isValid}
      >
        <FormInput
          FormInputTitle={loginInputData[0].FormInputTitle}
          FormInputError={loginInputData[0].FormInputError}
          FormInputErrorName={errors.userEmail}
          FormInputType={loginInputData[0].FormInputType}
          FormInputId={loginInputData[0].FormInputId}
          handleInputValueChange={handleChange}
          inputValue={userEmail || ""}
          inputName="userEmail"
        ></FormInput>
        <FormInput
          FormInputTitle={loginInputData[1].FormInputTitle}
          FormInputError={loginInputData[1].FormInputError}
          FormInputErrorName={errors.password}
          FormInputType={loginInputData[1].FormInputType}
          FormInputId={loginInputData[1].FormInputId}
          PasswordInput={loginInputData[1].PasswordInput}
          handleInputValueChange={handleChange}
          inputValue={password || ""}
          inputName="password"
        ></FormInput>
      </Form>
    </div>
  );
}

export default Login;
