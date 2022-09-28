import React from 'react';

export default function DrinksDetails() {
  const fetchApiMeals = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('API endpoint not found');
    }
  };

  // const api = fetchApiMeals();
  // {api.meals}
  return (
    <div>DrinksDetails</div>
  );
}
