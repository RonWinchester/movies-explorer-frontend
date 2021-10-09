import React from "react";

function Button({ handleClick, selector, name, types, isValid }) {
  const handleMoreClick = () => {
    handleClick();
  };

  return (
    <>
      {types === "submit" ? (
        <button
          type={types}
          className={`button ${selector} ${!isValid && 'button_disabled'}`}
          disabled={!isValid}
        >
          {name}
        </button>
      ) : (
        <button
          type={`${types ? types : "button"}`}
          className={`button ${selector}`}
          onClick={handleMoreClick}
        >
          {name}
        </button>
      )}
    </>
  );
}

export default Button;
