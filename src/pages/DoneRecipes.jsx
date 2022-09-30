import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);

  useEffect(() => {
    const getDone = () => {
      const done = JSON.parse(localStorage.getItem('doneRecipes'));
      setDoneRecipes(done);
    };
    getDone();
  }, []);

  return (
    <>
      <Header title="Done Recipes" />
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-meal-btn">Meals</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>

      { doneRecipes.length > 0 && doneRecipes.map((el, index) => (
        <div key={ index }>
          <img
            data-testid={ `${index}-horizontal-image` }
            src={ el.strMealThumb ? el.strMealThumb : el.strDrinkThumb }
            alt={ el.strMeal ? el.strMeal : el.strDrink }
          />

          <h6
            data-testid={ `${index}-horizontal-top-text` }
          >
            {el.strMeal ? el.strMeal : el.strDrink }
          </h6>

          <p
            data-testid={ `${index}-horizontal-name` }
          >
            {el.strCategory}
          </p>

          <p data-testid={ `${index}-horizontal-done-date` }>Data</p>

          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
          >
            Share
          </button>

          {el.tags.length > 0
          && (
            <div>
              <p data-testid={ `${index}-${el.tags[0]}-horizontal-tag` }>
                {el.tags[0]}
              </p>
              <p data-testid={ `${index}-${el.tags[1]}-horizontal-tag` }>
                {el.tags[1]}
              </p>
            </div>)}
        </div>
      ))}

    </>
  );
}

export default DoneRecipes;
