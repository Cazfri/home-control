import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders something on the app home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Copyright © Noah Martin-Ruben/i);
  expect(linkElement).toBeInTheDocument();
});
