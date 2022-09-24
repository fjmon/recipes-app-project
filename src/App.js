import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from './context/MyProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Route exact path="/" />
        <Route exact path="/meals" component={ Footer } />
        <Route exact path="/drinks" component={ Footer } />
        <Route exact path="/meals/{id-da-receita}" />
        <Route exact path="/drinks/{id-da-receita}" />
        <Route exact path="/meals/{id-da-receita}/in-progress" />
        <Route exact path="/drinks/{id-da-receita}/in-progress" />
        <Route exact path="/profile" component={ Footer } />
        <Route exact path="/done-recipes" />
        <Route exact path="/favorite-recipes" />
        <main>
          <h1>teste</h1>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
