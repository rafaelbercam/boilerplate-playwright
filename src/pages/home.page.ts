import { Locator, Page } from "playwright";
import * as dotenv from 'dotenv'
import config from "../../playwright.config"
dotenv.config();

export class HomePage {
    readonly page: Page;
    readonly fieldEmail: Locator;
    readonly fieldPassWord: Locator;
    readonly buttonAccess: Locator;
    readonly buttonRegister: Locator;
    readonly title: Locator;


    constructor(page: Page) {
        this.page = page;
        this.fieldEmail = page.getByPlaceholder('Informe seu e-mail');
        this.fieldPassWord = page.getByPlaceholder('Informe sua senha');
        this.buttonAccess = page.getByRole('button', { name: 'Acessar' });
        this.buttonRegister = page.getByRole('button', { name: 'Registrar' });
        this.title = page.getByRole('heading');
    }

    async goto() {
        await this.page.goto(`${config.baseURL}`);
    }

    async login () {
    //in progress
    }
}