import React, { useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import share from '../images/shareIcon.svg';
import Header from '../components/Header';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [shareCopyBtn, setShareCopyBtn] = useState(false);

  useEffect(() => {
    const getDone = () => {
      const done = JSON.parse(localStorage.getItem('doneRecipes'));
      setDoneRecipes(done);
    };
    getDone();
  }, []);

  const handleClickShare = (type, id) => {
    if (type === 'meal') {
      setShareCopyBtn(true);
      copy(`http://localhost:3000/meals/${id}`);
    } else {
      setShareCopyBtn(true);
      copy(`http://localhost:3000/drinks/${id}`);
    }
  };

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
            src={ el.image }
            alt={ el.name }
          />

          <h6
            data-testid={ `${index}-horizontal-name` }
          >
            {el.name }
          </h6>
          {el.type === 'meal' ? (
            <div>
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                {`${el.nationality} - ${el.category}`}
              </p>

            </div>
          ) : (
            <div>
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                {el.alcoholicOrNot}
              </p>

            </div>
          )}

          <p data-testid={ `${index}-horizontal-done-date` }>{el.doneDate}</p>

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
          <img
            src={ share }
            alt={ el.name }
            data-testid={ `${index}-horizontal-share-btn` }
            role="presentation"
            onClick={ () => handleClickShare(el.type, el.id) }
          />
          { shareCopyBtn && (
            <p>
              Link copied!
            </p>
          ) }
        </div>
      ))}

    </>
  );
}

export default DoneRecipes;
