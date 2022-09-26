import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SearchBar() {
  const { inputSearchBar,
    ingredient, name, firstLetter, handleChangeSearchBar } = useContext(MyContext);

  return (
    <main>
      <label htmlFor="ingrediente">
        Ingrediente
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="ingrediente"
          id=""
          value={ ingredient }
        />
      </label>
      <label htmlFor="nome">
        Nome
        <input
          type="radio"
          data-testid="name-search-radio"
          name="nome"
          id=""
          value={ name }
        />
      </label>
      <label htmlFor="primeira-letra">
        Primeira letra
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="primeira-letra"
          id=""
          value={ firstLetter }
        />
      </label>
      <input
        type="text"
        name="name"
        placeholder="typing"
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
