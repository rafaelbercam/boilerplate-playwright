import { test } from "../fixture/fixture.page";

require('dotenv').config();

test.describe('Validação da Home Page', async()=>{
    test("validar campos da home", async({homePage})=>{
        await homePage.goto();
        //in progress
    })
})