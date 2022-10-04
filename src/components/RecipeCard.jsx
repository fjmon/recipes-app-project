import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../style/RecipeCard.css';

function RecipeCard({ name, image, index, id, meal = true }) {
  const history = useHistory();
  const redirectToDetails = () => {
    if (meal) {
      history.push(`/meals/${id}`);
    }
    if (!meal) {
      history.push(`/drinks/${id}`);
    }
  };

  return (
    <div
      onClick={ redirectToDetails }
      role="presentation"
      className="card recipe-card"
    >
      <img
        alt="meal-thumbnail"
        className="card-img-top"
        src={ image }
        /* width="200" */
        data-testid={ `${index}-card-img` }
      />
      <div className="card-body">
        <h4 className="card-text" data-testid={ `${index}-card-name` }>{name}</h4>
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  meal: PropTypes.bool.isRequired,
};

export default RecipeCard;
