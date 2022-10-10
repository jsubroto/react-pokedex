import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pagination buttons', () => {
  render(<App />);
  const backElement = screen.getByText(/back/i);
  const nextElement = screen.getByText(/next/i);
  expect(backElement).toBeInTheDocument();
  expect(nextElement).toBeInTheDocument();
});
