import React from 'react';

export default function RecipesDetails() {
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

  // const api = fetchApiDrinks();
  // {api.drinks}
  return (
    <div>RecipesDetails</div>
  );
}
