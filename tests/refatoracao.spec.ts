
import { test, expect, Page } from '@playwright/test';
import {
  BASE_URL,
  GET_STARTED_LINK,
  INSTALLATION_HEADING
} from './constants';

async function acessarInstalacao(page: Page) {
  await page.getByRole('link', {
    name: GET_STARTED_LINK
  }).click();
}

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test('Verificar título da página inicial', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/);
});

test('Acessar a página de instalação', async ({ page }) => {
  await acessarInstalacao(page);

  await expect(
    page.getByRole('heading', {
      name: INSTALLATION_HEADING
    })
  ).toBeVisible();
});
