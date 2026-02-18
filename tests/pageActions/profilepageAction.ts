import { Page, Locator } from '@playwright/test';
import { profileObject } from '../PageObjects/profileObject';

export class Profile {

    readonly page: Page;
    readonly profileObject: profileObject;

    constructor(page: Page) {
        this.page = page;
        this.profileObject = new profileObject(page);
    }
    async clickOnProfileIcon() {
        await this.profileObject.profileIcon.click();
    }

    async clickOnProfileLink() {
        await this.profileObject.profileLink.click();
    }


}
