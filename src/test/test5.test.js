import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Second test', () => {
  test('should have correct text', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
