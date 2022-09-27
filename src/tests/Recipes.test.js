import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Footer from '../components/Footer';
import Recipes from '../pages/Recipes';
import App from '../App';
import meals from '../../cypress/mocks/meals';
import drinks from '../../cypress/mocks/drinks';

const mealCategories = {
  meals: [
    { strCategory: 'Beef' },
    { strCategory: 'Breakfast' },
    { strCategory: 'Chicken' },
    { strCategory: 'Dessert' },
    { strCategory: 'Goat' },
    { strCategory: 'Lamb' },
    { strCategory: 'Miscellaneous' },
    { strCategory: 'Pasta' },
    { strCategory: 'Pork' },
    { strCategory: 'Seafood' },
    { strCategory: 'Side' },
    { strCategory: 'Starter' },
    { strCategory: 'Vegan' },
    { strCategory: 'Vegetarian' },
  ],
};

const drinkCategories = {
  drinks: [
    {
      strCategory: 'Ordinary Drink',
    },
    {
      strCategory: 'Cocktail',
    },
    {
      strCategory: 'Shake',
    },
    {
      strCategory: 'Other/Unknown',
    },
    {
      strCategory: 'Cocoa',
    },
    {
      strCategory: 'Shot',
    },
    {
      strCategory: 'Coffee / Tea',
    },
    {
      strCategory: 'Homemade Liqueur',
    },
    {
      strCategory: 'Punch / Party Drink',
    },
    {
      strCategory: 'Beer',
    },
    {
      strCategory: 'Soft Drink',
    },
  ],
};

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const VALID_EMAIL = 'any@email.com';
const VALID_PASSWORD = '1234567';

test('', async () => {
  global.fetch = jest.fn().mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(meals),
  }).mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(mealCategories),
  });
  const { history } = renderWithRouter(<App />);
  const emailInput = screen.getByTestId(EMAIL_INPUT);
  const passwordInput = screen.getByTestId(PASSWORD_INPUT);
  const login = screen.getByTestId('login-submit-btn');
  userEvent.type(emailInput, VALID_EMAIL);
  userEvent.type(passwordInput, VALID_PASSWORD);
  userEvent.click(login);
  await waitFor(() => {
    const beefButton = screen.getByTestId('Beef-category-filter');
  });
});

// test('', async () => {
//   global.fetch = jest.fn().mockResolvedValueOnce({
//     json: jest.fn().mockResolvedValue(drinks),
//   }).mockResolvedValueOnce({
//     json: jest.fn().mockResolvedValue(drinkCategories),
//   });
//   const { history } = renderWithRouter(<App />);
//   const emailInput = screen.getByTestId(EMAIL_INPUT);
//   const passwordInput = screen.getByTestId(PASSWORD_INPUT);
//   const login = screen.getByTestId('login-submit-btn');
//   userEvent.type(emailInput, VALID_EMAIL);
//   userEvent.type(passwordInput, VALID_PASSWORD);
//   userEvent.click(login);
//   history.push('/drinks');
//   await waitFor(() => {
//     const beefButton = screen.getByTestId('Shake-category-filter');
//     // userEvent.click(beefButton)
//   });
// });
