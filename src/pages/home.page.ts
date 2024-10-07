import { Locator, Page, expect } from "@playwright/test";
import * as dotenv from 'dotenv'
import config from "../../playwright.config"
dotenv.config();

export class HomePage {
    readonly page: Page;
    readonly fieldEmail: Locator;
    readonly fieldPassword: Locator;
    readonly buttonAccess: Locator;
    readonly buttonRegister: Locator;
    readonly title: Locator;


   // Constants for placeholders and button names
   private static readonly EMAIL_PLACEHOLDER = 'Informe seu e-mail';
   private static readonly PASSWORD_PLACEHOLDER = 'Informe sua senha';
   private static readonly ACCESS_BUTTON_NAME = 'Acessar';
   private static readonly REGISTER_BUTTON_NAME = 'Registrar';

   constructor(page: Page) {
       this.page = page;
       this.fieldEmail = this.page.getByPlaceholder(HomePage.EMAIL_PLACEHOLDER);
       this.fieldPassword = this.page.getByPlaceholder(HomePage.PASSWORD_PLACEHOLDER);
       this.buttonAccess = this.page.getByRole('button', { name: HomePage.ACCESS_BUTTON_NAME });
       this.buttonRegister = this.page.getByRole('button', { name: HomePage.REGISTER_BUTTON_NAME });
       this.title = this.page.getByRole('heading');
   }

    async goto() {
            await this.page.goto(config.baseURL);
    }

    async login(email: string, password: string) {
            await this.fieldEmail.fill(email);
            await this.fieldPassword.fill(password);
            await this.buttonAccess.click();
    }

    async validateTitle(expectedText: string){ 
            await expect(this.title).toBeVisible();
            await expect(this.title).toContainText(expectedText);
    }
}