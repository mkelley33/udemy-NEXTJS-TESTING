import { render, screen } from '@testing-library/react';

import { Reservation } from '@/components/reservations/Reservation';

describe('Reservation page', () => {
  it('shows correct number of available seats', async () => {
    render(<Reservation showId={0} submitPurchase={jest.fn()} />);

    const seatCountText = await screen.findByText(/^10 seats left$/i);
    expect(seatCountText).toBeInTheDocument();
  });

  it('should show sold out message and not show the purchase button if no seats are available', async () => {
    render(<Reservation showId={1} submitPurchase={jest.fn()} />);
    const soldOutMessage = await screen.findByRole('heading', {
      name: /^show is sold out!$/i,
    });
    expect(soldOutMessage).toBeInTheDocument();
    const purchaseButton = screen.queryByRole('button', {
      name: /^purchase$/i,
    });
    expect(purchaseButton).not.toBeInTheDocument();
  });
});
