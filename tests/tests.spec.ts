import { test, expect } from '@playwright/test';

test('🏠 Главная загружается', async ({ page }) => {
  await page.goto('/');                    // baseURL + /
  await expect(page).toHaveTitle(/QA Spa1ce/);
  await expect(page.locator('h1')).toBeVisible();
});

test('🏠 Главная загружается-2', async ({ page }) => {
  await page.goto('/');                    // baseURL + /
  await expect(page).toHaveTitle(/QA Space/);
  await expect(page.locator('h1')).toBeVisible();
});

test('🏠 Главная загружается-3', async ({ page }) => {
  await page.goto('/');                    // baseURL + /
  await expect(page).toHaveTitle(/QA Space/);
  await expect(page.locator('h1')).toBeVisible();
});

test('🏠 Главная загружается-4', async ({ page }) => {
  await page.goto('/');                    // baseURL + /
  await expect(page).toHaveTitle(/QA Spa1ce/);
  await expect(page.locator('h1')).toBeVisible();
});

test('🏠 Главная загружается-5', async ({ page }) => {
  await page.goto('/');                    // baseURL + /
  await expect(page).toHaveTitle(/QA Spa1ce/);
  await expect(page.locator('h1')).toBeVisible();
});

test('🏠 Главная загружается-11', async ({ page }) => {
  await page.goto('/');                    // baseURL + /
  await expect(page).toHaveTitle(/QA Sp1ace/);
  await expect(page.locator('h1')).toBeVisible();
});