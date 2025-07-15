// playwright.config.js
module.exports = {
  testDir: './tests',
  timeout: 10000,
  use: {
    headless: true,
    browserName: 'chromium',
  },
};