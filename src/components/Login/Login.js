import React from "react";
import { loginData, loginInputData } from "../../constants/constants";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";

function Login() {
  const { title, name, description, link, linkName } = loginData;
  return (
    <div className="login">
      <Form
        name={name}
        title={title}
        description={description}
        link={link}
        linkName={linkName}
        selector='button-login_margin-top'
      >
        <FormInput
          FormInputTitle={loginInputData[0].FormInputTitle}
          FormInputName={loginInputData[0].FormInputName}
          FormInputError={loginInputData[0].FormInputError}
          FormInputErrorName={loginInputData[0].FormInputErrorName}
          FormInputType={loginInputData[0].FormInputType}
          FormInputId={loginInputData[0].FormInputId}
        ></FormInput>
        <FormInput
          FormInputTitle={loginInputData[1].FormInputTitle}
          FormInputName={loginInputData[1].FormInputName}
          FormInputError={loginInputData[1].FormInputError}
          FormInputErrorName={loginInputData[1].FormInputErrorName}
          FormInputType={loginInputData[1].FormInputType}
          FormInputId={loginInputData[1].FormInputId}
          PasswordInput={loginInputData[1].PasswordInput}
        ></FormInput>
      </Form>
    </div>
  );
}

export default Login;
