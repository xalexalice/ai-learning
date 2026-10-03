import { defineConfig } from '@playwright/test';
const base = (process.env.BASE_PATH ?? '/ai-learning').replace(/\/+$/, '') + '/';
export default defineConfig({
  testDir: './tests/browser',
  workers: 1,
  timeout: 30000,
  use: {
    baseURL: `http://127.0.0.1:4371${base}`,
    headless: true,
    launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROME_EXECUTABLE },
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4371',
    url: `http://127.0.0.1:4371${base}`,
    timeout: 30000,
    reuseExistingServer: false,
  },
});
