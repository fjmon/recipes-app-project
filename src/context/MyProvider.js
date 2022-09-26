import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import useFetchApi from '../Hooks/useFetchs';

function Provider({ children }) {
  const { ingredient, setIngredient, name, setName,
    firstLetter, setFirstLetter } = useFetchApi();
  const [loading, setLoading] = useState(null);
  const [inputSearchBar, setInputSearchBar] = useState('');

  const handleChangeSearchBar = ({ target: { value } }) => {
    setInputSearchBar(value);
  };

  const context = {
    loading,
    setLoading,
    inputSearchBar,
    setInputSearchBar,
    ingredient,
    setIngredient,
    name,
    setName,
    firstLetter,
    setFirstLetter,
    handleChangeSearchBar,
  };

  return (
    <main>
      <MyContext.Provider value={ context }>
        { children }
      </MyContext.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
