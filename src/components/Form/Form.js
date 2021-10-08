import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Button from "../Button/Button";

function Form({
  title,
  children,
  name,
  description,
  link,
  linkName,
  selector,
  handleSubmit,
}) {
  function submit(e) {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <form className="form" onSubmit={submit}>
      <Link to="/" className="form__image">
        <img src={logo} alt="лого"></img>
      </Link>
      <h1 className="form__title">{title}</h1>
      {children}
      <Button
        selector={`button-login ${selector}`}
        name={name}
        types="submit"
        handleClick={submit}
      />
      <p className="form__question">
        {description}
        <Link to={link} className="link form__link">
          {linkName}
        </Link>
      </p>
    </form>
  );
}

export default Form;
