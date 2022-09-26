import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';

function Recipes() {
  const [mealsRoute, setMealsRoute] = useState(false);
  const [drinksRoute, setDrinksRoute] = useState(false);
  const [meals, setMeals] = useState({});
  const [drinks, setDrinks] = useState({});
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const results = await response.json();
      setMeals(results);
      setMealsRoute(true);
    };
    const fetchDrinks = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const results = await response.json();
      setDrinks(results);
      setDrinksRoute(true);
    };
    if (window.location.pathname === '/meals') fetchMeals();
    if (window.location.pathname === '/drinks') fetchDrinks();
  }, []);
  const maxRecipes = 12;
  return (
    <div>
      { mealsRoute
        && meals.meals.map((elem, index) => (
          index < maxRecipes
            ? (
              <div data-testid={ `${index}-recipe-card` } key={ index }>
                <RecipeCard
                  index={ index }
                  name={ elem.strMeal }
                  image={ elem.strMealThumb }
                />
              </div>
            )
            : null
        ))}
      { drinksRoute
        && drinks.drinks.map((elem, index) => (
          index < maxRecipes
            ? (
              <div data-testid={ `${index}-recipe-card` } key={ index }>
                <RecipeCard
                  index={ index }
                  name={ elem.strDrink }
                  image={ elem.strDrinkThumb }
                />
              </div>
            )
            : null
        ))}
    </div>
  );
}

export default Recipes;
