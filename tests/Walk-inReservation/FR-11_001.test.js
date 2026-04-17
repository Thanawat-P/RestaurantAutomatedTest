import { test, expect } from '@playwright/test';
import { StaffAuthority } from '../../pages/staff.page';
import {table,reservation } from '../../data/restaurant.data';
import { Reservation } from '../../pages/reservation.page';

test('FR-11_001 - staff creates walk-in reservation successfully', async ({ page }) => {

  
  const staff = new StaffAuthority(page);
  await staff.gotoLogin();
  await staff.login('staff', 'password');

  await expect(page.locator('.staff-profile')).toBeVisible();

  const walkin = new Reservation(page);
  await walkin.gotoWalkInPage();
  const today = dayjs().format('MM-DD-YYYY');
  await walkin.walkInReservation(
    reservation.walkinData.customerName,
    reservation.walkinData.phone,
    today,
    reservation.walkinData.Time,
    reservation.walkinData.numberOfGuests,
    table.T01                   
  );

  await expect(
    page.locator('text=Reservation created successfully')
  ).toBeVisible();
});