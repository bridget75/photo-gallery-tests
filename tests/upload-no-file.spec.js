const { test, expect } = require('@playwright/test');

test('Upload without selecting an image', async ({ page }) => {
  await page.goto('http://demo.baasic.com/angular/starterkit-photo-gallery/main');
  await page.getByRole('button', { name: 'Upload' }).click();

  // Provjera da nije bilo uploada (ovisno o implementaciji)
  const uploadSuccess = await page.locator('.notification-success');
  await expect(uploadSuccess).not.toBeVisible();
});