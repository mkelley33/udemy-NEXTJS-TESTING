import { render, screen } from '@testing-library/react';

import Home from '@/pages/index';

describe('Home page content', () => {
  it('page has correct heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: 'Welcome to Popular Concert Venue',
    });
    expect(heading).toBeInTheDocument();
  });

  it('page has correct splash image', () => {
    render(<Home />);
    const image = screen.getByRole('img', {
      name: 'Concert goer with hands in the shape of a heart',
    });
    expect(image).toBeInTheDocument();
  });
});
