import { defineConfig } from '@playwright/test';

const localUrl = 'http://127.0.0.1:3101';
const baseURL = process.env.PLAYWRIGHT_BASE_URL;

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: {
    timeout: 5_000,
  },
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',
  use: {
    baseURL: baseURL || localUrl,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: baseURL ? undefined : {
    command: `npm run ${process.env.CI ? 'start' : 'dev'} -- --hostname 127.0.0.1 --port 3101`,
    url: localUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
