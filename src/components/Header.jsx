import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoDrink from '../images/drinkIcon.svg';
import logoMeal from '../images/mealIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../style/Header.css';

function Header({ title, search }) {
  const [statusSearchBar, setStatusSearchBar] = useState(false);

  const clickSearch = () => {
    if (statusSearchBar === true) {
      setStatusSearchBar(false);
    } else setStatusSearchBar(true);
  };

  return (
    <header data-testid="header-id">
      <div className="top-header">
        {search && (
          <div onClick={ clickSearch } role="presentation">
            <img
              src={ searchIcon }
              alt="icon search"
              data-testid="search-top-btn"
            />
          </div>)}
        <Link to="/profile">
          <img
            src={ profileIcon }
            alt="icon profile"
            data-testid="profile-top-btn"
          />
        </Link>
      </div>
      {
        title === 'Drinks' ? <img
          src={ logoDrink }
          alt="icon drink"
          className="icon-header"
        />
          : <img src={ logoMeal } alt="icon meals" className="icon-header" />
      }
      <h1 data-testid="page-title">{title}</h1>
      { statusSearchBar === true && <SearchBar title={ title } />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};

export default Header;
