import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import useFetchApi from '../Hooks/useFetchs';

function SearchBar() {
  const { ingredient, name, firstLetter } = useFetchApi();
  const { inputSearchBar, handleChangeSearchBar } = useContext(MyContext);

  return (
    <div id="search-bar">
      <div id="container-radios">
        <label htmlFor="ingrediente">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="ingrediente"
            id="ingrediente"
            value={ ingredient }
          />
          Ingrediente
        </label>
        <label htmlFor="nome">
          <input
            type="radio"
            data-testid="name-search-radio"
            name="nome"
            id="nome"
            value={ name }
          />
          Nome
        </label>
        <label htmlFor="primeira-letra">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="primeira-letra"
            id="primeira-letra"
            value={ firstLetter }
          />
          Primeira letra
        </label>
      </div>
      <input
        type="text"
        name="name"
        placeholder="typing"
        data-testid="search-input"
        value={ inputSearchBar }
        onChange={ handleChangeSearchBar }
      />
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar

      </button>
    </div>
  );
}

export default SearchBar;
