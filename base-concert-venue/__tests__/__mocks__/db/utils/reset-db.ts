import {
  filenames,
  readFakeData,
  writeJSONToFile,
} from '@/__tests__/__mocks__/fakeData';

export const resetDB = async () => {
  // failsafe against resetting production db!
  const safeToReset = process.env.NODE_ENV === 'test';
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  if (!safeToReset) {
    // eslint-disable-next-line prettier/prettier, no-console
    console.log(
      'WARNING: database reset unavailable outside test environment!'
    );
    return;
  }

  // eslint-disable-next-line prettier/prettier
  const { fakeShows, fakeBands, fakeUsers, fakeReservations } =
    await readFakeData();

  const dbPath = Cypress.env('DB_PATH');

  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands, dbPath),
    writeJSONToFile(filenames.shows, fakeShows, dbPath),
    writeJSONToFile(filenames.users, fakeUsers, dbPath),
    writeJSONToFile(filenames.reservations, fakeReservations, dbPath),
  ]);
};
