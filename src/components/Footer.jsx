import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import '../style/Footer.css';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <Link data-testid="drinks-bottom-btn" to="/drinks" src={ drinkIcon }>
        <img src={ drinkIcon } alt="Drinks" width="40" />
      </Link>
      <Link data-testid="meals-bottom-btn" to="/meals" src={ mealIcon }>
        <img src={ mealIcon } alt="Foods" width="40" />
      </Link>
    </footer>
  );
}

export default Footer;
