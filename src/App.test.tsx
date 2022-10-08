import { render, screen } from '@testing-library/react';
import App from './App';
import { MockedProvider } from '@apollo/client/testing';

describe('App', () => {
  beforeEach(() => {
    render(
      <MockedProvider>
        <App />
      </MockedProvider>
    );
  });

  it('should render the learn react link', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
