import { expect, test } from "@playwright/test";
import { Login } from "../pageActions/loginAction";
import { Profile } from "../pageActions/profilepageAction";

test.describe('Login & Profile Navigation Test', () => {

    let login: Login;
    let profile: Profile;

    test.beforeEach(async ({ page }) => {
        login = new Login(page);
        profile = new Profile(page);

        await page.goto("https://hrpayroll.hrsoftbd.net");
        await login.clickOnLoginIcon();
    });

    test("Successful login and navigate to profile", async ({ page }) => {

        await login.login("sabah@gmail.com", "123456");
        await expect(page).toHaveURL(/dashboard/);

        await profile.clickOnProfileIcon();
        await profile.clickOnProfileLink();

        await expect(page.locator('.profileContent')).toBeVisible();

    });

});
