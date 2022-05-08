import { render, screen } from '@testing-library/react';
import SearchBar from './searchBar';

test('renders learn react link', () => {
  render(<SearchBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
