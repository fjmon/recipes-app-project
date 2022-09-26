import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import useFetchApi from '../Hooks/useFetchs';

function SearchBar() {
  const { ingredient, name, firstLetter } = useFetchApi();
  const { inputSearchBar, handleChangeSearchBar } = useContext(MyContext);

  return (
    <main>
      <label htmlFor="ingrediente">
        Ingrediente
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="ingrediente"
          id="ingrediente"
          value={ ingredient }
        />
      </label>
      <label htmlFor="nome">
        Nome
        <input
          type="radio"
          data-testid="name-search-radio"
          name="nome"
          id="nome"
          value={ name }
        />
      </label>
      <label htmlFor="primeira-letra">
        Primeira letra
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="primeira-letra"
          id="primeira-letra"
          value={ firstLetter }
        />
      </label>
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
        Busca

      </button>
    </main>
  );
}

export default SearchBar;
