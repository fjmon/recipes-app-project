import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Provider from './context/MyProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Footer from './components/Footer';
import Recipes from './pages/Recipes';
import RecipesDetails from './pages/RecipesDetails';
import DrinksDetails from './pages/DrinksDetails';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route
            exact
            path="/meals"
            render={ () => (
              <div>
                <Meals />
                <Recipes />
                <Footer />
              </div>) }
          />
          <Route exact path="/meals/:id" component={ RecipesDetails } />
          <Route
            exact
            path="/drinks"
            render={ () => (
              <div>
                <Drinks />
                <Recipes />
                <Footer />
              </div>) }
          />
          <Route exact path="/drinks/:id" component={ DrinksDetails } />
          <Route
            exact
            path="/profile"
            render={ () => (
              <div>
                <Profile />
                <Footer />
              </div>) }
          />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route exact path="/meals/{id-da-receita}" />
          <Route exact path="/drinks/{id-da-receita}" />
          <Route exact path="/meals/{id-da-receita}/in-progress" />
          <Route exact path="/drinks/{id-da-receita}/in-progress" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
