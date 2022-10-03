import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DoneRecipes from '../pages/DoneRecipes';
import renderWithRouter from './helpers/renderWithRouter';
import MockDoneRecipes from './helpers/MockDoneRecipes';

localStorage.setItem('doneRecipes', JSON.stringify(MockDoneRecipes));
Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});
jest.spyOn(navigator.clipboard, 'writeText');

describe('Testes da pagina done Recipes', () => {
  it('Testa se existem botões na página', () => {
    localStorage.setItem('doneRecipes', JSON.stringify(MockDoneRecipes));
    renderWithRouter(<DoneRecipes />);
    const filterAllButton = screen.getByTestId('filter-by-all-btn');
    expect(filterAllButton).toBeInTheDocument();
    userEvent.click(filterAllButton);
    const filterMealButton = screen.getByTestId('filter-by-meal-btn');
    expect(filterMealButton).toBeInTheDocument();
    userEvent.click(filterMealButton);
    const filterDrinkButton = screen.getByTestId('filter-by-drink-btn');
    expect(filterDrinkButton).toBeInTheDocument();
    userEvent.click(filterDrinkButton);
    const shareBtn0 = screen.getByTestId(`${0}-horizontal-share-btn`);
    expect(shareBtn0).toBeInTheDocument();
    userEvent.click(shareBtn0);
    const shareBtn1 = screen.getByTestId(`${1}-horizontal-share-btn`);
    expect(shareBtn1).toBeInTheDocument();
    userEvent.click(shareBtn1);
  });
});
