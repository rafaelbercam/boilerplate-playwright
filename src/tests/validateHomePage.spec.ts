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

        // Realiza o registro de um novo usuário
        const userEmail = 'faelbercam+102@gmail.com'
        const userName = 'NovoUsuario';
        const password = 'SenhaSegura123';
        await homePage.register(userEmail, userName, password);

        // Valida se o texto de sucesso contém "criada com sucesso"
        await homePage.validatePartialText('criada com sucesso');
    });

});