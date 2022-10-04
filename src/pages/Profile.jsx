import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../style/Profile.css';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user')) || '';
  return (
    <div className="container-profile">
      <Header title="Profile" />
      <h3 data-testid="profile-email">{user.email}</h3>

      <div className="container-btn-profile">
        <Link to="/done-recipes">
          <button
            data-testid="profile-done-btn"
            type="button"
            className="btn btn-primary"
          >
            Done Recipes
          </button>
        </Link>

        <Link to="/favorite-recipes">
          <button
            type="button"
            data-testid="profile-favorite-btn"
            className="btn btn-primary"
          >
            Favorites
          </button>
        </Link>

        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            className="btn btn-primary"
            onClick={ () => localStorage.clear() }
          >
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
