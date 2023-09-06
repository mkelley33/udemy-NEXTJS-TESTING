import { PathParams, rest } from 'msw';

import { readFakeData } from '@/__tests__/__mocks__/fakeData';
import { fakeUserReservations } from '@/__tests__/__mocks__/fakeData/userReservations';

const host = 'http://localhost:3000/api/';

export const handlers = [
  rest.get(`${host}shows/:showId`, async (req, res, ctx) => {
    const { fakeShows } = await readFakeData();
    const { showId } = req.params as { showId: string };
    return res(ctx.json({ show: fakeShows[+showId] }));
  }),
  rest.get(`${host}users/:userId/reservations`, async (req, res, ctx) => {
    const { userId } = req.params as { userId: string };
    const userReservations = +userId === 1 ? fakeUserReservations : [];
    return res(ctx.json({ userReservations }));
  }),
];
