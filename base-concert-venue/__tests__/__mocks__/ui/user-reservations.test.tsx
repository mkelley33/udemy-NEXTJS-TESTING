import { render, screen } from '@testing-library/react';

import { UserReservations } from '@/components/user/UserReservations';

describe('User reservation component', () => {
  it('should show the purchas more tickets button', async () => {
    render(<UserReservations userId={1} />);
    const purchaseMoreTicketsButton = await screen.findByRole('button', {
      name: /^purchase more tickets$/i,
    });
    expect(purchaseMoreTicketsButton).toBeInTheDocument();
  });
});
