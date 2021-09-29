import React from 'react';

function MoreButton({ handleClick }) {
  /* const handleMoreClick =() => {
    handleClick();
  } */

  return (
    <button
      type="button"
      className="more-button"
      /* onClick={handleMoreClick} */
    >
      Ещё
    </button>
  );
}

export default MoreButton;