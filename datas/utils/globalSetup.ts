import { chromium, expect, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

      await page.goto('https://svm-propel.com/auth');
      await expect(page).toHaveTitle("PROPEL");
      await page.getByRole('textbox', { name: 'Enter your email' }).fill('nagarajan.vijayakumar@solverminds.sg');
      await page.getByRole('textbox', { name: 'Enter your password' }).fill('P@ssw0rd');
      await page.getByRole('button', { name: 'Sign in' }).click();
      await expect(page.getByText('Export PDF')).toBeVisible({ timeout: 5000 });

      await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
}

export default globalSetup;

