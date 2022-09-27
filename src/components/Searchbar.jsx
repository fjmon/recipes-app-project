import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
// import useFetchApi from '../Hooks/useFetchs';
import { fetchIngredient, fetchName, fetchFirstLetter } from '../Hooks/useFetchs';

function SearchBar() {
  // const { ingredient, name, firstLetter } = useFetchApi();
  const [filterInput, setFilterInput] = useState('');
  const { inputSearchBar, setInputSearchBar } = useContext(MyContext);
  const [verifyApi, setVerifyApi] = useState('');
  console.log(verifyApi);

  const handleChangeSearchBar = ({ target: { value } }) => {
    setInputSearchBar(value);
  };

  const handleChangeInputs = ({ target: { value } }) => {
    setFilterInput(value);
  };

  const handleClick = () => {
    if (filterInput === 'ingrediente') {
      setVerifyApi(fetchIngredient(inputSearchBar));
    }
    if (filterInput === 'nome') {
      setVerifyApi(fetchName(inputSearchBar));
    }
    if (filterInput === 'primeira-letra') {
      if (inputSearchBar.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        setVerifyApi(fetchFirstLetter(inputSearchBar));
      }
    }
  };

  return (
    <div id="search-bar">
      <div id="container-radios">
        <label htmlFor="ingrediente">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="ingrediente"
            id="ingrediente"
            value="ingrediente"
            onChange={ handleChangeInputs }
          />
          Ingrediente
        </label>
        <label htmlFor="nome">
          <input
            type="radio"
            data-testid="name-search-radio"
            name="nome"
            id="nome"
            value="nome"
            onChange={ handleChangeInputs }
          />
          Nome
        </label>
        <label htmlFor="primeira-letra">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="primeira-letra"
            id="primeira-letra"
            value="primeira-letra"
            onChange={ handleChangeInputs }
          />
          Primeira letra
        </label>
      </div>
      <input
        type="text"
        data-testid="search-input"
        // value={ inputSearchBar }
        onChange={ handleChangeSearchBar }
      />
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar

      </button>
    </div>
  );
}

export default SearchBar;
