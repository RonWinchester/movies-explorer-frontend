import React from "react";

function Checkbox({ shortFilms, notShortFilms }) {
  const [checked, setChecked] = React.useState(false);
  

  function handleCheckbox() {
    setChecked(!checked);
    if (!checked) {
      shortFilms();
    } else {
      notShortFilms();
    }
  }

  return (
    <div className="checkbox">
      <input
        required
        className="checkbox__input"
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onChange={handleCheckbox}
      />
      <label htmlFor="checkbox" className="checkbox__label">
        Короткометражки
      </label>
    </div>
  );
}

export default Checkbox;
