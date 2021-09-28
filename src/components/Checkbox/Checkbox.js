import React from "react";

function Checkbox() {
  return (
    <div className="checkbox">
      <input
        required
        className="checkbox__input"
        type="checkbox"
        name="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="checkbox__label">
        Короткометражки
      </label>
    </div>
  );
}

export default Checkbox;
