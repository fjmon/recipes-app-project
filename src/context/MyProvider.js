import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
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
