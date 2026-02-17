import { Page, Locator } from '@playwright/test';

export class LoginObjects {

    readonly page: Page;
    readonly loginIcon: Locator;

    readonly email: Locator;
    readonly password: Locator;
    readonly submit: Locator;


    constructor(page: Page) {
        this.page = page;

        this.loginIcon = page.locator(':text("Sign In")');

        this.email = page.locator('input[type="email"]');
        this.password = page.locator('input[name="password"]');

        this.submit = page.locator("button[type='submit']");


    }
}
