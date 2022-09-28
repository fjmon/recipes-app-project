import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import meals from '../../cypress/mocks/meals';
import drinks from '../../cypress/mocks/drinks';
import mealCategories from '../../cypress/mocks/mealCategories';
import drinkCategories from '../../cypress/mocks/drinkCategories';
import beefMeals from '../../cypress/mocks/beefMeals';
// import ordinaryDrinks from '../../cypress/mocks/ordinaryDrinks';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const VALID_EMAIL = 'any@email.com';
const VALID_PASSWORD = '1234567';

test('', async () => {
  global.fetch = jest.fn().mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(meals),
  }).mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(mealCategories),
  }).mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(beefMeals),
  })
    .mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(drinks),
    })
    .mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(drinkCategories),
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
    userEvent.click(beefButton);
    expect(screen.getByTestId('0-card-name')).toBeInTheDocument();
    history.push('/drinks');
    expect(history.location.pathname).toBe('/drinks');
  });
});
