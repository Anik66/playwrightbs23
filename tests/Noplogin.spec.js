import {test,expect} from '@playwright/test'

test("Login Nopcommerce",async({page})=>{

    await page.goto("/login")
   //await page.locator("#Username").fill("anik");
    await page.getByLabel('Email').fill("sarife2782@calorpg.com");
    await page.getByLabel('Password').fill("A5b#9x");
    await page.locator('#RememberMe').check();
    await page.getByRole('button', { name: 'Log in' }).click(); 

    await expect(page.getByText('Welcome to our store')).toBeVisible();

    



      await page.pause();


})
