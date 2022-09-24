import React from 'react';
import PropTypes from 'prop-types';
import logoDrink from '../images/drinkIcon.svg';
import logoMeal from '../images/mealIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../style/Header.css';

function Header({ title, search }) {
  return (
    <header>
      <div id="top-header">
        <img src={ profileIcon } alt="icon profile" data-testid="profile-top-btn" />
        {search && <img
          src={ searchIcon }
          alt="icon search"
          data-testid="search-top-btn"
        /> }
      </div>
      {
        title === 'Meals' ? <img src={ logoMeal } alt="icon meals" id="icon" />
          : <img src={ logoDrink } alt="icon drink" id="icon" />
      }
      <h1 data-testid="page-title">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};

export default Header;
