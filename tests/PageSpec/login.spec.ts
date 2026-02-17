import { expect, test } from "@playwright/test";
import { Login } from "../pageActions/loginAction";





test.describe('Login Page testing', () => {
    let login: Login;


    test("Successful Sign Up with Valid credidantal user", async ({ page }) => {
        login = new Login(page);
        await page.goto("https://hrpayroll.hrsoftbd.net");
        await login.clickOnLoginIcon();
        await login.login("sabah@gmail.com", "123456");

        await expect(page).toHaveURL(/dashboard/);


    });

    test("unsuccessful Sign Up with InValid credidantal user", async ({ page }) => {
        login = new Login(page);
        await page.goto("https://hrpayroll.hrsoftbd.net");
        await login.clickOnLoginIcon();
        await login.login("sabah@gmail.com", "123456");

        const message = page.getByRole('alert')

        await expect(message).toBeVisible();


    });

})
