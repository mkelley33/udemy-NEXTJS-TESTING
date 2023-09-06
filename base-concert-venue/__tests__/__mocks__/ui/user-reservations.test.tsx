import { render, screen } from '@testing-library/react';

import { UserReservations } from '@/components/user/UserReservations';

describe('User reservation component', () => {
  it('should show the purchase more tickets button', async () => {
    render(<UserReservations userId={1} />);
    const purchaseMoreTicketsButton = await screen.findByRole('button', {
      name: /^purchase more tickets$/i,
    });
    expect(purchaseMoreTicketsButton).toBeInTheDocument();
  });

  it('should show a purchase tickets button and the your tickets heading is not there', async () => {
    render(<UserReservations userId={0} />);
    const purchaseTicketsButton = await screen.findByRole('button', {
      name: /^purchase tickets$/i,
    });
    expect(purchaseTicketsButton).toBeInTheDocument();
    const yourTicketsHeading = screen.queryByRole('heading', {
      name: /^your tickets$/i,
    });
    expect(yourTicketsHeading).not.toBeInTheDocument();
  });
});
