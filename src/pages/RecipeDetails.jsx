import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});

  const fetchApiDrinks = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('API endpoint not found');
    }
  };

  const api = fetchApiDrinks();

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
      {api.drinks}
    </>
  );
}
export default RecipeDetails;
