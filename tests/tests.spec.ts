import { test, expect } from '@playwright/test';

test('🏠 Главная загружается', async ({ page }) => {
  await page.goto('/');                    // baseURL + /
  await expect(page).toHaveTitle(/QA Space/);
  await expect(page.locator('h1')).toBeVisible();
});