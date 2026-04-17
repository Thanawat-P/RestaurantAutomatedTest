import { test, expect } from '@playwright/test';
import { StaffAuthority } from '../../pages/staff.page';
import { WalkIn } from '../../pages/walkin.page';
import { staff } from '../../data/user.data';
import dayjs from 'dayjs';

test('FR-11_013 - walk-in reservation only allows today date', async ({ page }) => {

  const today = dayjs().format('MM-DD-YYYY');
  const otherDay = dayjs().add(1, 'day').format('MM-DD-YYYY');

  const staffs = new StaffAuthority(page);
  await staffs.gotoLogin();
  await staffs.login(staff.valid.username, staff.valid.password);

  await expect(page.locator('.staff-profile')).toBeVisible();

  const walkin = new WalkIn(page);
  await walkin.gotoWalkInPage();

  const dateInput = page.locator('#date');

  await expect(dateInput).toHaveValue(today);

  await page.evaluate((val) => {
    document.querySelector('#date').value = val;
  }, otherDay);

  await expect(dateInput).toHaveValue(today);
});