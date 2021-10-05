import React from "react";
import Form from "../Form/Form";
import { registerData, regiterInputData } from "../../constants/constants";
import FormInput from "../FormInput/FormInput";

function Register() {
  const { title, name, description, link, linkName } = registerData;

  return (
    <div className="register">
      <Form
        name={name}
        title={title}
        description={description}
        link={link}
        linkName={linkName}
        /* onSubmit={handleSubmit} */
      >
        <FormInput
          FormInputTitle={regiterInputData[0].FormInputTitle}
          FormInputName={regiterInputData[0].FormInputName}
          FormInputError={regiterInputData[0].FormInputError}
          FormInputErrorName={regiterInputData[0].FormInputErrorName}
          FormInputType={regiterInputData[0].FormInputType}
          FormInputId={regiterInputData[0].FormInputId}
        ></FormInput>
        <FormInput
          FormInputTitle={regiterInputData[1].FormInputTitle}
          FormInputName={regiterInputData[1].FormInputName}
          FormInputError={regiterInputData[1].FormInputError}
          FormInputErrorName={regiterInputData[1].FormInputErrorName}
          FormInputType={regiterInputData[1].FormInputType}
          FormInputId={regiterInputData[1].FormInputId}
        ></FormInput>
        <FormInput
          FormInputTitle={regiterInputData[2].FormInputTitle}
          FormInputName={regiterInputData[2].FormInputName}
          FormInputError={regiterInputData[2].FormInputError}
          FormInputErrorName={regiterInputData[2].FormInputErrorName}
          FormInputType={regiterInputData[2].FormInputType}
          FormInputId={regiterInputData[2].FormInputId}
          PasswordInput={regiterInputData[2].PasswordInput}
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
