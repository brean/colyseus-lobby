import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('show Room overview first', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Rooms/i);
  expect(linkElement).toBeInTheDocument();
});
