import React from "react";

function NoFilms({title}) {
  return (
    <div className='no-films'>
      <h2 className='no-films__title'>{title}</h2>
    </div>
  );
}

export default NoFilms;
