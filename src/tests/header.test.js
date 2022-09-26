import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import Drinks from '../pages/Drinks';

describe('Testa o componente <Header /> ', () => {
  test('Verifica se as rotas corretas possuiem o <Header /> com seus itens essenciais', () => {
    const { history } = renderWithRouter(<Drinks />);
    const paths = ['/meals', '/drinks', '/profile', '/done-recipes', '/favorite-recipes'];

    paths.forEach((path) => {
      history.push(path);
      expect(screen.getByTestId('header-id')).toBeInTheDocument();
      expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
    });
  });

  test('Verifica se em /profile, /done-recipes, /favorite-recipes as possuiem o <Header /> sem o icone de pesquisa', () => {
    const { history } = renderWithRouter(<Drinks />);
    const paths = ['/profile', '/done-recipes', '/favorite-recipes'];

    paths.forEach((path) => {
      history.push(path);
      expect(screen.queryByTestId('search-icon-div')).not.toBeInTheDocument();
    });
  });
});
