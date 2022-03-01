import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Second test', () => {
  test('should have correct text', () => {
    render(<App />);

    expect(screen.getByText(/edits/i)).toBeInTheDocument();
    expect(screen.getByText(/and save to reload\./i)).toBeInTheDocument();
  });
});
