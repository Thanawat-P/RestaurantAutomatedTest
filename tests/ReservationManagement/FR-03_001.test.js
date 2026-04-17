import { test, expect } from '@playwright/test';
import {UserAuthen} from '../../pages/user.page'
import { customer } from '../../data/user.data';
import { Reservation } from '../../pages/reservation.page';
import { reservation,table } from '../../data/restaurant.data';

test('FR-03_001 - customer register with email format invalid', async ({ page }) => {
    const login = new UserAuthen(page);
    await login.gotoLogin();
    await login.login(
        customer.valid.username,
        customer.valid.password,
    )
    await expect(page.locator('.user-profile')).toBeVisible();
    const user = new Reservation(page)
    await user.makeReservation(
        reservation.valid.Date,
        reservation.valid.Time,
        reservation.valid.guest,
        table.T02)

    await expect(page.locator('text=Reservation confirmed')).toBeVisible();
});
