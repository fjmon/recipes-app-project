import React from 'react';
import PropTypes from 'prop-types';

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

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default RecipeCard;
