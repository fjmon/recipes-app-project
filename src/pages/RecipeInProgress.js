import React, { useState, useEffect } from 'react';

function RecipeInProgress() {
  const [mealsRoute, setMealsRoute] = useState(false);
  const [drinksRoute, setDrinksRoute] = useState(false);
  const [mealDetails, setMealDetails] = useState({});
  const [drinkDetails, setDrinkDetails] = useState({});
  const [finishButtonState, setFinishButtonState] = useState(true);
  const [checkedIngredients, setCheckedIngredients] = useState(0);
  useEffect(() => {
    const id = parseInt(window.location.pathname.replace(/[^0-9]/g, ''), 10);
    console.log(id);
    const fetchMealDetails = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const results = await response.json();
      setMealDetails(results);
      setMealsRoute(true);
    };
    const fetchDrinkDetails = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const results = await response.json();
      setDrinkDetails(results);
      setDrinksRoute(true);
    };
    if (window.location.pathname.includes('/meals')) {
      fetchMealDetails();
    }
    if (window.location.pathname.includes('/drinks')) {
      fetchDrinkDetails();
    }
  }, []);
  const checkIngredients = (event) => {
    if (event.target.checked === true) {
      setCheckedIngredients(checkedIngredients + 1);
    }
    if (event.target.checked === false) {
      setCheckedIngredients(checkedIngredients - 1);
    }
    if (checkedIngredients === document.getElementsByTagName('input').length - 1) {
      setFinishButtonState(false);
    } else {
      setFinishButtonState(true);
    }
    // console.log(event.target.checked);
    // const savedState = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
    // console.log(event.target.id);
    // const newState = {
    //   drinks: {
    //     ...savedState.drinks,
    //   },
    //   meals: {
    //     ...savedState.meals,
    //     [event.target.name]: [...savedState.meals[event.target.name], event.target.id],
    //   },
    // };
    // localStorage.setItem('inProgressRecipes', JSON.stringify(newState));
  };
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
          {Object.keys(mealDetails.meals[0])
            .filter((e) => e.includes('strIngredient'))
            .map((e2, i) => mealDetails.meals[0][e2]
          && (
            <div key={ i }>
              <label
                data-testid={ `${i}-ingredient-step` }
                htmlFor={ mealDetails.meals[0][e2] }
              >
                {mealDetails.meals[0][e2]}
                <input
                  type="checkbox"
                  id={ mealDetails.meals[0][e2] }
                  name={ elem.idMeal }
                  onClick={ checkIngredients }
                />
              </label>
            </div>
          ))}
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
          {Object.keys(drinkDetails.drinks[0])
            .filter((e) => e.includes('strIngredient'))
            .map((e2, i) => drinkDetails.drinks[0][e2]
          && (
            <div key={ i }>
              <label
                data-testid={ `${i}-ingredient-step` }
                htmlFor={ drinkDetails.drinks[0][e2] }
              >
                {drinkDetails.drinks[0][e2]}
                <input
                  type="checkbox"
                  id={ drinkDetails.drinks[0][e2] }
                  name={ elem.idDrink }
                  onClick={ checkIngredients }
                />
              </label>
            </div>
          ))}
        </div>
      ))}
      <button
        data-testid="finish-recipe-btn"
        type="button"
        disabled={ finishButtonState }
      >
        Finish Recipe

      </button>
    </div>
  );
}

export default RecipeInProgress;
