import { test, expect } from '@playwright/test';
import {UserAuthen} from '../../pages/user.page'
import { customer,emailVarient } from '../../data/user.data';


const randomUser = `user_${Date.now()}`;

test('FR-01_004 - customer register with email format invalid', async ({ page }) => {
    const reg = new UserAuthen(page);
    await reg.gotoRegister();
    await reg.register(
        randomUser,
        customer.valid.password,
        emailVarient.invalid.noAdd)

    await expect(page.locator('.user-profile')).toBeVisible();
});
