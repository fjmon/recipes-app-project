import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import meals from '../../cypress/mocks/meals';

import mealCategories from '../../cypress/mocks/mealCategories';

import oneMeal from '../../cypress/mocks/oneMeal';
import oneDrink from '../../cypress/mocks/oneDrink';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const VALID_EMAIL = 'any@email.com';
const VALID_PASSWORD = '1234567';

test('', async () => {
  global.fetch = jest.fn().mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(meals),
  })
    .mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mealCategories),
    })
    .mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(oneMeal),
    })
    .mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(oneDrink),
    });
  renderWithRouter(<App />);
  const emailInput = screen.getByTestId(EMAIL_INPUT);
  const passwordInput = screen.getByTestId(PASSWORD_INPUT);
  const login = screen.getByTestId('login-submit-btn');
  userEvent.type(emailInput, VALID_EMAIL);
  userEvent.type(passwordInput, VALID_PASSWORD);
  userEvent.click(login);
});
