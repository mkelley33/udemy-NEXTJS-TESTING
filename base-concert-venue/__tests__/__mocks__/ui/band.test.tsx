import { render, screen } from '@testing-library/react';

import BandPage from '@/pages/bands/[bandId]';

import { readFakeData } from '../fakeData';

describe('BandPage', () => {
  it('should display the correct band information', async () => {
    const { fakeBands } = await readFakeData();
    render(<BandPage error={null} band={fakeBands[0]} />);
    const heading = screen.getByRole('heading', {
      name: /^the wandering bunnies$/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it('should display the error passed in to props', () => {
    render(<BandPage error="There was an error" band={null} />);
    const heading = screen.getByRole('heading', {
      name: /^Could not retrieve band data: There was an error$/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
