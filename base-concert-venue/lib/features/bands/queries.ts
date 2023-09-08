import {
  filenames,
  getItemById,
  getJSONfromFile,
  writeJSONToFile,
  dbPath,
} from '@/__tests__/__mocks__/fakeData';

import type { Band } from './types';

export async function writeBands(newBandsArray: Band[]): Promise<void> {
  await writeJSONToFile(filenames.bands, newBandsArray, dbPath);
}

export async function getBands(): Promise<Band[]> {
  return getJSONfromFile<Band>(filenames.bands, dbPath);
}

export async function getBandById(bandId: number): Promise<Band> {
  return getItemById<Band>(bandId, filenames.bands, 'band');
}

export async function addBand(newBand: Band): Promise<Band> {
  const bands = await getBands();
  bands.push(newBand);
  await writeBands(bands);
  return newBand;
}
