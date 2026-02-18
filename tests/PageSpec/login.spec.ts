import { expect, test } from "@playwright/test";
import { Login } from "../pageActions/loginAction";

test.describe('Login Page Testing', () => {

    let login: Login;

    test.beforeEach(async ({ page }) => {
        login = new Login(page);
        await page.goto("https://hrpayroll.hrsoftbd.net");
        await login.clickOnLoginIcon();
    });

    test("Successful login with valid credentials", async ({ page }) => {
        await login.login("sabah@gmail.com", "123456");
        await expect(page).toHaveURL(/dashboard/);
    });

    test("Unsuccessful login with invalid email", async ({ page }) => {
        await login.login("invalid@email.com", "123456");

        const message = page.getByRole('alert');
        await expect(message).toBeVisible();
    });

    test("Unsuccessful login with invalid password", async ({ page }) => {
        await login.login("sabah@gmail.com", "15600");

        const message = page.getByRole('alert');
        await expect(message).toBeVisible();
    });

});
