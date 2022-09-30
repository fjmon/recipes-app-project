import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/MyContext';

function DoneRecipes() {
  const { doneRecipes } = useContext(MyContext);
  return (
    <>
      <Header title="Done Recipes" />
      <div>
        <button type="button">All</button>
        <button type="button">Meals</button>
        <button type="button">Drinks</button>
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

          {el.strTag !== null
          && <p data-testid={ `${index}-${el.strTag}-horizontal-tag` }>{el.strTag}</p>}

        </div>
      ))}

    </>
  );
}

export default DoneRecipes;
