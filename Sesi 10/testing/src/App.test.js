import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test ('should render App succesfully', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // EXPECT 1 - ambil title lalu test keberadaannya
  const title = screen.getByText(/ini adalah header/i);
  expect(title).toBeInTheDocument();

  // EXPECT 2 - Mencari Button di dalam halaman Home
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('List Users');

  // ? NAVIGATE - pindah dari halaman Home ke halaman Users
  fireEvent.click(button);

  // ? Halaman Users - ERROR
  // const titleAlt = screen.getByText(/ini adalah header/i);

  // EXPECT 3 - cari dan cek button pada halaman Users
  const homeButton = screen.getByRole('button');
  expect(homeButton).toBeInTheDocument();
  expect(homeButton).toHaveTextContent('Back to Home');
})