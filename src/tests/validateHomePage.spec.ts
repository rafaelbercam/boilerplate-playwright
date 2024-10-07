import { UserFactory } from "../factory/user.factory";
import { test } from "../fixture/fixture.page";
import { expect } from '@playwright/test';
require('dotenv').config();

test.describe('Home Page Validation', () => {

    test('should validate the title of the home page', async ({ homePage }) => {
        await homePage.goto();
        await homePage.validateTitle(process.env.EXPECTED_HOME_TITLE);
    });

    test('should register a new user and validate success message', async ({ homePage }) => {
        await homePage.goto();

        const user = UserFactory.createUser();
        await homePage.register(user.email, user.name, user.password);

        // Valida se o texto de sucesso contém "criada com sucesso"
        await homePage.validatePartialText('criada com sucesso');
    });

});