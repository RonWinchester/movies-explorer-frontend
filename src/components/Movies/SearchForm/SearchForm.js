import React from 'react';
import './SearchForm.css';
import Checkbox from '../../Checkbox/Checkbox';

function SearchForm() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <form
      noValidate
      id="search-form"
      onSubmit={handleSubmit}
      className='search-form'
    >
      <fieldset className='search-form__fieldset'>
        <label className="search-form__label"> 
          <input
            required
            placeholder="Фильм"
            type="text"
            minLength="1"
            maxLength="70"
            name="name-search"
            className="search-form__input"
          />
        </label>
        <button
          type="submit"
          className='search-form__button'
        />
      </fieldset>
      <fieldset className='search-form__fieldset'>
          <Checkbox></Checkbox>
      </fieldset>
    </form>
  );
}

export default SearchForm;