import { Page, Locator } from '@playwright/test';

export class profileObject {

    readonly page: Page;
    readonly profileIcon: Locator;

    readonly profileLink: Locator;
    readonly payroll: Locator;



    constructor(page: Page) {
        this.page = page;

        this.profileIcon = page.locator("//img[@alt='Profile']");

        this.profileLink = page.locator("//ul[@class='dropdown-menu show']//li[2]");
        this.payroll = page.getByRole('link', { name: 'Payroll' });





    }
}
