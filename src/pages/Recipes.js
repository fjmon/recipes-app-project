import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import meals from './mocks/meals';
import drinks from './mocks/drinks';

function Recipes() {
  const [mealsRoute, setMealsRoute] = useState(false);
  const [drinksRoute, setDrinksRoute] = useState(false);
  useEffect(() => {
    if (window.location.pathname === '/meals') setMealsRoute(true);
    if (window.location.pathname === '/drinks') setDrinksRoute(true);
  }, []);
  const maxRecipes = 12;
  return (
    <div>
      { mealsRoute
        && meals.meals.map((elem, index) => (
          index < maxRecipes
            ? (
              <div data-testid={ `${index}-recipe-card` }>
                <RecipeCard
                  index={ index }
                  name={ elem.strMeal }
                  image={ elem.strMealThumb }
                  key={ index }
                />
              </div>
            )
            : null
        ))}
      { drinksRoute
        && drinks.drinks.map((elem, index) => (
          index < maxRecipes
            ? (
              <div data-testid={ `${index}-recipe-card` }>
                <RecipeCard
                  index={ index }
                  name={ elem.strDrink }
                  image={ elem.strDrinkThumb }
                  key={ index }
                />
              </div>
            )
            : null
        ))}
    </div>
  );
}

export default Recipes;
