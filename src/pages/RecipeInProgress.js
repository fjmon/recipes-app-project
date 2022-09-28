import React, { useState, useEffect } from 'react';

function RecipeInProgress() {
  const [mealsRoute, setMealsRoute] = useState(false);
  const [drinksRoute, setDrinksRoute] = useState(false);
  const [mealDetails, setMealDetails] = useState({});
  const [drinkDetails, setDrinkDetails] = useState({});
  useEffect(() => {
    const fetchMealDetails = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771');
      const results = await response.json();
      setMealDetails(results);
      // setMealsToShow(results);
      // const response2 = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      // const results2 = await response2.json();
      // setMealsCategories(results2);
      setMealsRoute(true);
    };
    const fetchDrinkDetails = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319');
      const results = await response.json();
      setDrinkDetails(results);
      //   setDrinksToShow(results);
      //   const response2 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      //   const results2 = await response2.json();
      //   setDrinksCategories(results2);
      setDrinksRoute(true);
    };
    if (window.location.pathname.includes('/meals')) {
      fetchMealDetails();
    }
    if (window.location.pathname.includes('/drinks')) {
      fetchDrinkDetails();
    }
  }, []);
  return (
    <div>
      Recipe in Progress
      {mealsRoute
      && mealDetails.meals.map((elem, index) => (
        <div key={ index }>
          <img
            alt="meal-thumbnail"
            src={ elem.strMealThumb }
            width="200"
            data-testid="recipe-photo"
          />
          <p data-testid="recipe-title">{ elem.strMeal }</p>
          <button data-testid="share-btn" type="button">Share</button>
          <button data-testid="favorite-btn" type="button">Favorite</button>
          <p data-testid="recipe-category">{ elem.strCategory }</p>
          <p data-testid="instructions">{ elem.strInstructions }</p>
        </div>
      ))}
      {drinksRoute
      && drinkDetails.drinks.map((elem, index) => (
        <div key={ index }>
          <img
            alt="meal-thumbnail"
            src={ elem.strDrinkThumb }
            width="200"
            data-testid="recipe-photo"
          />
          <p data-testid="recipe-title">{ elem.strDrink }</p>
          <button data-testid="share-btn" type="button">Share</button>
          <button data-testid="favorite-btn" type="button">Favorite</button>
          <p data-testid="recipe-category">{ elem.strCategory }</p>
          <p data-testid="instructions">{ elem.strInstructions }</p>
        </div>
      ))}
      <button data-testid="finish-recipe-btn" type="button">Finish Recipe</button>
    </div>
  );
}

export default RecipeInProgress;
