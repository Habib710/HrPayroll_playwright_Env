import { test } from "@playwright/test";
import { Login } from "../pageActions/loginAction";





test.describe('Login Page testing', () => {
    let login: Login;


    test("Successful Sign Up with Valid credidantal user", async ({ page }) => {
        login = new Login(page);
        await login.clickOnLoginIcon();
        await login.login("sabah@gmail.com", "123456");

    });

})
