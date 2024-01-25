import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataFetchingComponent from './DataFetchingComponent';

// Test 1: Renders the component without errors
test('renders the component without errors', () => {
  render(<DataFetchingComponent />);
});

// Test 2: Displays the "Fetch Data" button
test('displays the "Fetch Data" button', () => {
  render(<DataFetchingComponent />);
  expect(screen.getByText('Fetch Data')).toBeInTheDocument();
});

// Test 3: Fetches data and displays title and body after clicking the button
test('fetches data and displays title and body after clicking the button', async () => {
  render(<DataFetchingComponent />);
  const fetchButton = screen.getByText('Fetch Data');
  fireEvent.click(fetchButton);

  await waitFor(() => {
    expect(screen.getByText('Title:')).toBeInTheDocument();
    expect(screen.getByText('Body:')).toBeInTheDocument();
  });
});

// Test 4: Displays loading message while fetching data
test('displays loading message while fetching data', async () => {
  render(<DataFetchingComponent />);
  const fetchButton = screen.getByText('Fetch Data');
  fireEvent.click(fetchButton);

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Title:')).toBeInTheDocument();
    expect(screen.getByText('Body:')).toBeInTheDocument();
  });
});

// Test 5: Handles API fetch failure and shows error message
test('handles API fetch failure and shows error message', async () => {
  // Mock fetch to simulate a failure response
  global.fetch = jest.fn(() => Promise.reject('Fetch error'));

  render(<DataFetchingComponent />);
  const fetchButton = screen.getByText('Fetch Data');
  fireEvent.click(fetchButton);

  await waitFor(() => {
    expect(screen.getByText('Error:')).toBeInTheDocument();
  });

  // Restore the original fetch function
  global.fetch.mockRestore();
});

// Add more tests as needed
