import { screen } from '@testing-library/react';

test('renders cleanup react app message', () => {
  const cleanupMessage = screen.getByText(/Cleanedup React App/i);
  expect(cleanupMessage).toBeInTheDocument();
});
