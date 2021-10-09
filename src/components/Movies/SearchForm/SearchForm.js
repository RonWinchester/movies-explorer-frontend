import React from "react";
import "./SearchForm.css";
import Checkbox from "../../Checkbox/Checkbox";

function SearchForm({ handleRequest, shortFilms, notShortFilms }) {
  const [query, setQuery] = React.useState("");
  const [emptyRequest, setEmptyRequest] = React.useState(false);

  function handleSearchChange(e) {
    setQuery(e.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (query.length > 0) {
      setEmptyRequest(false);
      return handleRequest(query);
    }
    return setEmptyRequest(true);
  };

  return (
    <form
      noValidate
      id="search-form"
      onSubmit={handleSubmit}
      className="search-form"
    >
      <fieldset className="search-form__fieldset">
        <label className="search-form__label">
          <input
            required
            placeholder={emptyRequest ? "Нужно ввести ключевое слово" : "Фильм"}
            type="text"
            minLength="1"
            maxLength="70"
            name="name-search"
            className={`search-form__input ${emptyRequest ? "search-form__input_error":''}`}
            onChange={handleSearchChange}
            autoComplete='none'
            value={query}
          />
        </label>
        <button
          type="submit"
          className="search-form__button"
          onClick={handleSubmit}
        />
      </fieldset>
      <fieldset className="search-form__fieldset">
        <Checkbox shortFilms={shortFilms} notShortFilms={notShortFilms}></Checkbox>
      </fieldset>
    </form>
  );
}

export default SearchForm;
