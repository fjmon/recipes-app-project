import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MyContext from '../context/MyContext';
// import useFetchApi from '../Hooks/useFetchs';
import { fetchIngredient, fetchName, fetchFirstLetter,
  fetchDrinkIngredient, fetchDrinkName, fetchDrinkFirstLetter } from '../Hooks/useFetchs';

function SearchBar() {
  // const { ingredient, name, firstLetter } = useFetchApi();
  const location = useLocation();
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
      if (location.pathname === '/meals') {
        setVerifyApi(fetchIngredient(inputSearchBar));
      } else {
        setVerifyApi(fetchDrinkIngredient(inputSearchBar));
      }
    }
    if (filterInput === 'nome') {
      if (location.pathname === '/meals') {
        setVerifyApi(fetchName(inputSearchBar));
      } else {
        setVerifyApi(fetchDrinkName(inputSearchBar));
      }
    }
    if (filterInput === 'primeira-letra') {
      if (inputSearchBar.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      if (location.pathname === '/meals') {
        setVerifyApi(fetchFirstLetter(inputSearchBar));
      } else {
        setVerifyApi(fetchDrinkFirstLetter(inputSearchBar));
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
