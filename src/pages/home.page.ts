import { Locator, Page, expect } from "@playwright/test";
import * as dotenv from 'dotenv'
import config from "../../playwright.config"
import { exec } from "child_process";
dotenv.config();

export class HomePage {
    readonly page: Page;
    readonly fieldEmail: Locator;
    readonly fieldPassword: Locator;
    readonly buttonAccess: Locator;
    readonly buttonRegister: Locator;
    readonly title: Locator;
    readonly fieldName: Locator;
    readonly fieldPasswordRegister: Locator;
    readonly fieldPasswordRegisterConformation: Locator;
    readonly buttonAddBalance: Locator;
    readonly linkBackToLogin: Locator;
    readonly buttonRegisterConfirmation: Locator;
    readonly modalText: Locator;
    readonly fieldEmailRegistration: Locator;



   // Constants for placeholders and button names
   private static readonly EMAIL_PLACEHOLDER = 'Informe seu e-mail';
   private static readonly PASSWORD_PLACEHOLDER = 'Informe sua senha';
   private static readonly ACCESS_BUTTON_NAME = 'Acessar';
   private static readonly REGISTER_BUTTON_NAME = 'Registrar';
   private static readonly REGISTER_CONFIRMATION = 'Cadastrar'
   private static readonly YOUR_NAME = 'Informe seu Nome'
   private static readonly FILL_PASSWORD = 'Informe sua senha';
   private static readonly FILL_PASSWORD_CONFIRMATION = 'Informe a confirmação da senha';
   private static readonly BACK_TO_LOGIN = 'Voltar ao login';

   constructor(page: Page) {
       this.page = page;
       this.fieldEmail = this.page.getByPlaceholder(HomePage.EMAIL_PLACEHOLDER);
       this.fieldPassword = this.page.getByPlaceholder(HomePage.PASSWORD_PLACEHOLDER);
       this.buttonAccess = this.page.getByRole('button', { name: HomePage.ACCESS_BUTTON_NAME });
       this.buttonRegister = this.page.getByRole('button', { name: HomePage.REGISTER_BUTTON_NAME });
       this.title = this.page.getByRole('heading');
       this.fieldEmailRegistration = this.page.getByPlaceholder(HomePage.EMAIL_PLACEHOLDER).nth(1);
       this.fieldName = this.page.getByPlaceholder(HomePage.YOUR_NAME);
       this.fieldPasswordRegister = this.page.getByPlaceholder(HomePage.FILL_PASSWORD).nth(1);
       this.fieldPasswordRegisterConformation = this.page.getByPlaceholder(HomePage.FILL_PASSWORD_CONFIRMATION);
       this.buttonAddBalance = this.page.locator('#toggleAddBalance');
       this.buttonRegisterConfirmation = this.page.getByRole('button', { name: HomePage.REGISTER_CONFIRMATION });
       this.linkBackToLogin = this.page.getByRole('link', { name: HomePage.BACK_TO_LOGIN });
       this.modalText = this.page.locator('#modalText');
   }

    async goto() {
            await this.page.goto(config.baseURL);
    }

    async login(email: string, password: string) {
            await expect(this.fieldEmail).toBeVisible();
            await expect(this.fieldEmail).toBeEditable();
            await this.fieldEmail.fill(email);
            await expect(this.fieldPassword).toBeVisible();
            await expect(this.fieldPassword).toBeEditable();
            await this.fieldPassword.fill(password);
            await expect(this.buttonAccess).toBeVisible();
            await this.buttonAccess.click();
    }

    async register(email:string, name:string, password:string){
        await expect(this.buttonRegister).toBeVisible();
        await this.buttonRegister.click();
        await expect(this.fieldEmailRegistration).toBeVisible();
        await this.fieldEmailRegistration.click();
        await this.fieldEmailRegistration.fill(email);
        await expect(this.fieldName).toBeVisible();
        await this.fieldName.click();
        await this.fieldName.fill(name);
        await expect(this.fieldPasswordRegister).toBeVisible();
        await this.fieldPasswordRegister.click();
        await this.fieldPasswordRegister.fill(password);
        await expect(this.fieldPasswordRegisterConformation).toBeVisible();
        await this.fieldPasswordRegisterConformation.click();
        await this.fieldPasswordRegisterConformation.fill(password);
        await this.buttonAddBalance.click();
        await this.buttonRegisterConfirmation.click();
    }

    async validatePartialText(text: string) {
        await expect(this.modalText).toContainText(text);
    }



    async validateTitle(expectedText: string){ 
            await expect(this.title).toBeVisible();
            await expect(this.title).toContainText(expectedText);
    }
}