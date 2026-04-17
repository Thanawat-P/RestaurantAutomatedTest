import { test, expect } from '@playwright/test';
import { UserAuthen } from '../../pages/user.page';
import { Reservation } from '../../pages/reservation.page';
import { customer } from '../../data/user.data';
import { reservation, table } from '../../data/restaurant.data';

test('FR-04_025 - cannot reserve unavailable table', async ({ page }) => {

  const login = new UserAuthen(page);
  await login.gotoLogin();
  await login.login(
    customer.valid.username,
    customer.valid.password
  );

  await expect(page.locator('.user-profile')).toBeVisible();

  const reserve = new Reservation(page);
  await reserve.gotoReservation();

  await reserve.makeReservation(
    reservation.unavailable.Date,     
    reservation.unavailable.Time,      
    reservation.valid.guest,           
    table.T02,                         
    reservation.valid.specialRequest
  );

  await expect(
    page.locator('text=the selected table is not available during specified date and timeslot')
  ).toBeVisible();
});