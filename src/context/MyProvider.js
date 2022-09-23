import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [loading, setLoading] = useState(null);

  const context = {
    loading,
    setLoading,
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
