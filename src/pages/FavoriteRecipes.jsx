import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = () => {
      const favoriteRecipes = localStorage.getItem('favoriteRecipes');
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
          <img src={ fav.image } alt={ fav.name } />
        </div>
      ))}

    </>
  );
}

export default FavoriteRecipes;
