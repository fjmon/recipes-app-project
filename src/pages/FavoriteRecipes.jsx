import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import iconFavorited from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = () => {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      setFavorites(favoriteRecipes);
    };
    getFavorites();
  }, []);

  return (
    <>
      <Header title="Favorite Recipes" />

      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-meal-btn">Meals</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>

      {favorites.length > 0 && favorites.map((fav, index) => (
        <div key={ index }>
          <img
            src={ fav.image }
            alt={ fav.name }
            data-testid={ `${index}-horizontal-image` }
          />

          <h6
            data-testid={ `${index}-horizontal-top-text` }
          >
            {fav.strMeal ? fav.strMeal : fav.strDrink }
          </h6>

          <p
            data-testid={ `${index}-horizontal-name` }
          >
            {fav.strCategory}
          </p>

          <div>
            <button
              type="button"
              data-testid={ `${index}-horizontal-share-btn` }
            >
              Share
            </button>

            <img
              data-testid={ `${index}-horizontal-favorite-btn` }
              src={ iconFavorited }
              alt="Favoritado"
              role="presentation"
            />
          </div>

        </div>
      ))}

    </>
  );
}

export default FavoriteRecipes;
