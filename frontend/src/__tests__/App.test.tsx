import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('The main app', () => {
  it('should render the Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();

  });
  it('should ensure the Payments component is in the App component', () => {
    render(<App />);
    expect(screen.getByText('Payments')).toBeInTheDocument();
  });
  it('should render the Home link', () => {
    render(<App />);
    //expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: "Home" })).toBeInTheDocument();
  });
  it('should render the Home header', () => {
    render(<App />);
    expect(screen.getByRole('heading', {level: 2 })).toBeInTheDocument();
  });
})

//npm test cannot find this file for whatever reason. i have no idea what's wrong. i'm stuck on page 8
