import { test, expect } from '@playwright/test';
import {UserAuthen} from '../../pages/user.page'
import { customer } from '../../data/user.data';


const randomUser = `user_${Date.now()}`;

test('FR-01_001 - customer register with new account', async ({ page }) => {
    const reg = new UserAuthen(page);
    await reg.gotoRegister();
    await reg.register(randomUser,
        customer.valid.password,
        customer.valid.email)

    await expect(page.locator('.user-profile')).toBeVisible();
});
