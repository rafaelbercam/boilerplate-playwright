import { test as _baseTest, expect as baseExpect } from "@playwright/test";

//Importing pages

import { HomePage } from "../pages/home.page";

// Function PageFactory

async function createPage(PageClass, {page}, use) {
    const pageInstance = new PageClass(page);
    await use(pageInstance);
}

export const test = _baseTest.extend({
    homePage: async ({page}, use) => {
        await createPage(HomePage, { page }, use);
    }
})

export const expect = baseExpect;