import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../style/Carousel.css';

function RecipeDetails() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const { recommendationDrinks, setRecommendationDrinks } = useContext(MyContext);
  const history = useHistory();

  useEffect(() => {
    const fetchApiDrinks = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRecommendationDrinks(data.drinks);
      } catch (error) {
        console.log('API endpoint not found');
      }
    };
    fetchApiDrinks();
  }, []); // eslint-disable-line

  const CARDS_MAXIMUM = 6;

  const embedURL = (url) => {
    if (url) {
      const URL = url;
      const newURL = URL.replace('watch?v=', 'embed/');
      return newURL;
    }
  };

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setRecipeDetails(data.meals[0]);
    };
    fetchMeal();
  }, [id]);

  const getIngredients = () => {
    const ingredients = [];
    const maxIngredients = 20;
    for (let index = 0; index <= maxIngredients; index += 1) {
      const ingredient = `strIngredient${index}`;
      const measure = `strMeasure${index}`;
      if (recipeDetails[ingredient] && recipeDetails[measure] !== null) {
        ingredients.push(`${recipeDetails[ingredient]} (${recipeDetails[measure]}) `);
      }
    }
    return ingredients;
  };

  let btnDisappear = '';
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (doneRecipes !== null) {
    btnDisappear = doneRecipes.some((recipe) => recipe.id === id);
  }

  let btnContinue = '';
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgressRecipes !== null) {
    const { meals } = inProgressRecipes;
    btnContinue = Object.keys(meals).some((recipe) => recipe === id);
  }

  return (
    <>
      <img
        data-testid="recipe-photo"
        src={ recipeDetails.strMealThumb }
        alt={ recipeDetails.strMeal }
      />
      <h1 data-testid="recipe-title">{recipeDetails.strMeal}</h1>
      <h3 data-testid="recipe-category">{recipeDetails.strCategory}</h3>
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
      <p data-testid="instructions">{recipeDetails.strInstructions}</p>
      { embedURL(recipeDetails.strYoutube)
        && <iframe
          src={ embedURL(recipeDetails.strYoutube) }
          title={ recipeDetails.strMeal }
          allowFullScreen
          data-testid="video"
        />}
      <div className="scroll">
        {recommendationDrinks.length > 0 && recommendationDrinks.map((drink, i) => (
          i < CARDS_MAXIMUM && (
            <div
              className="scroll-child"
              key={ drink.idDrink }
              data-testid={ `${i}-recommendation-card` }
            >
              <p
                className="scroll-p"
                data-testid={ `${i}-recommendation-title` }
              >
                { drink.strDrink }

              </p>
              <img
                className="scroll-img"
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
              />
            </div>
          )
        ))}
      </div>
      {btnDisappear === '' && (
        <button
          className="scroll-btn"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => history.push(`/meals/${id}/in-progress`) }
        >
          {btnContinue ? 'Continue Recipe' : 'Start Recipe'}

        </button>
      )}
    </>
  );
}
export default RecipeDetails;
