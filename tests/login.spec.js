const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('login test for user b123', async ({ page }) => {
  // Otvori login stranicu
  await page.goto('https://demo.baasic.com/angular/starterkit-photo-gallery/login');

  // Upisi username
  await page.fill('input[formcontrolname="username"]', 'b123');

  // Upisi password
  await page.fill('input[formcontrolname="password"]', '12345678');

  // Klikni na button Login
  await page.click('button:has-text("Login")');

   // Spremi DOM snapshot nakon logina
   const html = await page.content();
   const outputPath = path.resolve(__dirname, '../test-results/dom-snapshot-after-login.html');
   fs.writeFileSync(outputPath, html);
   console.log('DOM snapshot saved to:', outputPath);

  // Čekaj da se pojavi element koji pokazuje da si ulogiran,
  // npr. gumb "Upload Album" ili logout button
  await expect(page.locator('text=b123')).toBeVisible({ timeout: 15000 });
});




