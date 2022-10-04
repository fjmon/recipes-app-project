import React, { useContext } from 'react';

import MyContext from '../context/MyContext';

function Drinks() {
  const { drinksRecipes } = useContext(MyContext);

  const CARDS_MAXIMUM = 12;

  return (
    <div>
      {drinksRecipes.length > 0 && drinksRecipes.map((drink, i) => (
        i < CARDS_MAXIMUM && (
          <div key={ drink.idDrink } data-testid={ `${i}-recipe-card` }>
            <p data-testid={ `${i}-card-name` }>{ drink.strDrink }</p>
            <img
              src={ drink.strDrinkThumb }
              alt={ drink.strDrink }
              data-testid={ `${i}-card-img` }
            />
          </div>
        )
      ))}
    </div>
  );
}

export default Drinks;
