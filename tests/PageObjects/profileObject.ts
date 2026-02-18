import { Page, Locator } from '@playwright/test';

export class profileObject {

    readonly page: Page;
    readonly profileIcon: Locator;

    readonly profileLink: Locator;



    constructor(page: Page) {
        this.page = page;

        this.profileIcon = page.locator("//img[@alt='Profile']");

        this.profileLink = page.getByText('Profile', { exact: true });



    }
}
