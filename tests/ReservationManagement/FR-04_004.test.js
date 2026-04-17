import { test, expect } from '@playwright/test';
import { UserAuthen } from '../../pages/user.page';
import { Reservation } from '../../pages/reservation.page';
import { customer } from '../../data/user.data';
import { reservation, table } from '../../data/restaurant.data';
import dayjs from 'dayjs';

const today = dayjs().format('MM-DD-YYYY');
const oneHourLater = dayjs().add(50, 'minutes');
const formattedTime = oneHourLater.format('HH:mm');
test('FR-04_004 - cannot reserve with today date', async ({ page }) => {

  // login
  const login = new UserAuthen(page);
  await login.gotoLogin();
  await login.login(
    customer.valid.username,
    customer.valid.password
  );

  await expect(page.locator('.user-profile')).toBeVisible();

  // go to reservation page
  const reserve = new Reservation(page);
  await reserve.gotoReservation();

  await reserve.makeReservation(
    today,        
    formattedTime,       
    reservation.valid.guest,      
    table.T02,                
    reservation.valid.specialRequest
  );

  await expect(
    page.locator('text=date must be between tomorrow and 180 days after today')
  ).toBeVisible();
});