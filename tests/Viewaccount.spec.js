import {test,expect} from '@playwright/test'

test("View account",async({page})=>{

    await page.goto("/login")
   
    await page.getByLabel('Email').fill("sarife2782@calorpg.com");
    await page.getByLabel('Password').fill("A5b#9x");
    await page.locator('#RememberMe').check();
    await page.getByRole('button', { name: 'Log in' }).click();
    
    
    await page.waitForTimeout(2000);

    //account 

    //await page.getByRole('link', { name: 'My account' }).click();
    //await page.locator('a[href="/customer/info"]').click();



   

    



      await page.pause();


})