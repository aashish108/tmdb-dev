import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import nock from 'nock';


test('renders initial API screen page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to TMDB/i);
  expect(linkElement).toBeInTheDocument();
});

test('Entered API key', async () => {
  render(<App />);
  const inputNode = screen.getByPlaceholderText('Enter TMDB API Key');
  fireEvent.change(inputNode, { target: { value: 'abcde' }});
  const button = await screen.findByRole('button', { name: 'Submit' });
  fireEvent.click(button);

  const headingElement = screen.getByRole('heading', {level: 1, name: 'Dashboard'});
  expect(headingElement).toBeInTheDocument();
});