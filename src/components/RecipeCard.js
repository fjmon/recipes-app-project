import React from 'react';

function RecipeCard({ name, image, index }) {
  return (
    <div>
      <img
        alt="meal-thumbnail"
        src={ image }
        width="200"
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </div>
  );
}

export default RecipeCard;
