import { Page, Locator } from '@playwright/test';
import { LoginObjects } from '../PageObjects/LoginObject/loginObject';

export class Login {

    readonly page: Page;
    readonly loginObjects: LoginObjects;

    constructor(page: Page) {
        this.page = page;
        this.loginObjects = new LoginObjects(page);
    }
    async clickOnLoginIcon() {
        await this.loginObjects.loginIcon.click();
    }

    async login(email: string, password: string) {
        await this.loginObjects.email.fill(email);
        await this.loginObjects.password.fill(password);
        await this.loginObjects.submit.click();

    }


}