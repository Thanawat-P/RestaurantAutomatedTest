import { test, expect } from '@playwright/test';
import { Restaurant } from '../../pages/restaurant(admin).page';
import { admin } from '../../data/user.data';

test('FRx-5_012 - peak hours graph reflects relative reservation volume', async ({ page }) => {

  const restaurant = new Restaurant(page);

  await restaurant.gotoLogin();
  await restaurant.login(admin.valid.username, admin.valid.password);
  await restaurant.gotoReportPage();

  const peakSection = page.locator('.card', {
    hasText: 'Peak hours'
  });

  const getWidth = async (label) => {
    const row = peakSection.locator('div', { hasText: label });
    const bar = row.locator('div >> nth=1');
    const width = await bar.evaluate(el => el.style.width);
    return parseFloat(width);
  };

  const w1 = await getWidth('12:00–13:00'); // 85
  const w2 = await getWidth('18:00–19:00'); // 100
  const w3 = await getWidth('19:00–20:00'); // 92
  const w4 = await getWidth('20:00–21:00'); // 65

  expect(w2).toBeGreaterThan(w3);
  expect(w2).toBeGreaterThan(w1);
  expect(w2).toBeGreaterThan(w4);

  expect(w3).toBeGreaterThan(w1);
  expect(w1).toBeGreaterThan(w4);
});