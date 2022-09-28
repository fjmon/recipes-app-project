import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [details, setDetails] = useState(null);

  const fetchMeal = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = response.json();
    setDetails(data.meals);
  };

  const fetchDrink = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = response.json();
    setDetails(data.drinks);
  };

  const param = new URLSearchParams(pathname).has('/meals');

  useEffect(() => {
    if (param) {
      fetchMeal();
    } else {
      fetchDrink();
    }
  });

  return (
    <>
    { param ? (
      <>
      <img data-testid="recipe-photo" src={details.strMealThumb} />
      <h1 data-testid="recipe-title">{details.strMeal}</h1>
      <h3 data-testid="recipe-category">{details.strCategory}</h3>
      
      </>
    ) : 
    }
    </>
  );
}

export default RecipeDetails;
