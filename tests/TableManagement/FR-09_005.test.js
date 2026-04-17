import { test, expect } from '@playwright/test';
import { StaffAuthority } from '../../pages/staff.page';
import { Reservation } from '../../pages/reservation.page';
import { staff } from '../../data/user.data';

test('FR-09_005 - out of service cancels future reservations', async ({ page }) => {

  const staffs = new StaffAuthority(page);
  await staffs.gotoLogin();
  await staffs.login(staff.valid.username
    , staff.valid.password);

  await staffs.gotoTablePage();

  await staffs.updateStatus('T-01', 'Out of Service');

  await page.click('text=Confirm');

  const reserve = new Reservation(page);
  await reserve.gotoAllReservations();

  const row = page.locator('tr').filter({ hasText: 'R_01' });
  await expect(row.locator('text=cancelled')).toBeVisible();
});