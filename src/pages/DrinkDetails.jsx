import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../context/MyContext';

function DrinkDetails() {
  const { id } = useParams();
  const [drinkDetails, setDrinkDetails] = useState({});
  const { recommendationMeals, setRecommendationMeals } = useContext(MyContext);

  useEffect(() => {
    const fetchApiMeals = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.meals);
        setRecommendationMeals(data.meals);
      } catch (error) {
        console.log('API endpoint not found');
      }
    };
    fetchApiMeals();
  }, []); // eslint-disable-line

  const CARDS_MAXIMUM = 6;

  useEffect(() => {
    const fetchDrink = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setDrinkDetails(data.drinks[0]);
    };
    fetchDrink();
  }, [id]);

  const getIngredients = () => {
    const ingredients = [];
    const maxIngredients = 15;
    for (let index = 0; index <= maxIngredients; index += 1) {
      const ingredient = `strIngredient${index}`;
      const measure = `strMeasure${index}`;
      if (drinkDetails[ingredient] && drinkDetails[measure] !== null) {
        ingredients.push(`${drinkDetails[ingredient]} (${drinkDetails[measure]}) `);
      }
    }
    return ingredients;
  };

  return (
    <>
      <img
        data-testid="recipe-photo"
        src={ drinkDetails.strDrinkThumb }
        alt={ drinkDetails.strDrink }
      />
      <h1 data-testid="recipe-title">{drinkDetails.strDrink}</h1>
      <h3 data-testid="recipe-category">{drinkDetails.strAlcoholic}</h3>
      <ol>
        <h6>Ingredients:</h6>
        { getIngredients().map((item, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {item}
          </li>
        ))}
      </ol>
      <p data-testid="instructions">{drinkDetails.strInstructions}</p>
      <div className="scroll">
        {recommendationMeals.length > 0 && recommendationMeals.map((meal, i) => (
          i < CARDS_MAXIMUM && (
            <div
              className="scroll-child"
              key={ meal.idMeal }
              data-testid={ `${i}-recommendation-card` }
            >
              <p
                className="scroll-p"
                data-testid={ `${i}-recommendation-title` }
              >
                { meal.strMeal }

              </p>
              <img
                className="scroll-img"
                src={ meal.strMealThumb }
                alt={ meal.strMeal }
              />
            </div>
          )
        ))}
      </div>
      <button
        className="scroll-btn"
        type="button"
        data-testid="start-recipe-btn"
      >
        Start Recipe

      </button>
    </>
  );
}

export default DrinkDetails;
