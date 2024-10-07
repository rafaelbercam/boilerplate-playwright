import { test } from "../fixture/fixture.page";
import { expect } from '@playwright/test';
require('dotenv').config();

test.describe('Home Page Validation', () => {

    test('should validate the title of the home page', async ({ homePage }) => {
        await homePage.goto();
        await homePage.validateTitle(process.env.EXPECTED_HOME_TITLE);
    });

});