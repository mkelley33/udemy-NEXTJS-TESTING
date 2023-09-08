import { defineConfig } from 'cypress';
import dotenv from 'dotenv';
import { addBand } from '@/lib/features/bands/queries';

dotenv.config({ path: './.env.test.local' });

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // eslint-disable-next-line no-param-reassign
      config.env = {
        ...process.env,
        ...config.env,
      };

      on('task', {
        addBand: (newBand) => addBand(newBand).then((res) => null),
      });

      return config;
    },
  },
});
