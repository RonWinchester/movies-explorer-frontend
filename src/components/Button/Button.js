import React from 'react';

function Button({ handleClick, selector, name, types }) {
  const handleMoreClick =() => {
    handleClick();
  }

  return (
    <button
      type={`${types ? types : 'button'}`}
      className={`button ${selector}`}
      onClick={handleMoreClick}
    >
      {name}
    </button>
  );
}

export default Button;