import { test, expect } from '@playwright/test';

test('🏠 Главная загружается', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/QA Space/);
  await expect(page.locator('h1')).toBeVisible();
});

test('Кнопка "Возможности" нажимается', async ({ page }) => {
  await page.goto('/');
  await page.locator('.top__content-btn').click();
});

test('Переход на страницу Подсчет символов', async ({ page }) => {
  await page.goto('/analiz-dannyh/');
  await page.locator('.instruments__item:nth-child(1)').click();
  await expect(page).toHaveURL('https://qaspace.ru/analiz-dannyh/podschet-simvolov');
  await expect(page.locator('h1')).toBeVisible();
});