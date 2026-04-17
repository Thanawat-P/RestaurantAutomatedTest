import { test, expect } from '@playwright/test';
import { Restaurant } from '../../pages/restaurant(admin).page'; 
import { admin } from '../../data/user.data';
import { profile } from '../../data/restaurant.data';

test('FR-12_001 - admin can update valid operating hours', async ({ page }) => {

  const admins = new Restaurant(page);

  await admins.gotoLogin();
  await admins.login(admin.valid.username, admin.valid.password);

  await expect(page.locator('.admin-profile')).toBeVisible();

  await admins.gotoSetting();

  await admins.setRestuarant(
    profile.branch.name,
    profile.branch.opentime,
    profile.branch.closetime,
    profile.branch.address)

  await expect(
    page.locator('text=Operating hours updated successfully')
  ).toBeVisible();
});