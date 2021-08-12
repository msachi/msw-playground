import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('does not show name when logged out', async () => {
  render(<App />);
  const getUserButton = screen.getByRole('button', { name: "Get user"})
  getUserButton.click()

  await waitFor(() => {
    expect(screen.queryByText('User is Andy')).toBeFalsy();
  });
});

test('shows name when logged in', async () => {
  render(<App />);
  const loginButton = screen.getByRole('button', { name: "Login"})
  loginButton.click()
  const getUserButton = screen.getByRole('button', { name: "Get user"})
  getUserButton.click()

  await waitFor(() => {
    expect(screen.getByText('User is Andy')).toBeTruthy();
  });
});
