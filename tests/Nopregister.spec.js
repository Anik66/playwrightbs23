import {test,expect} from '@playwright/test'

test("Register Nopcommerce",async({page})=>{
    await page.goto("/register")
    //Your Personal Details
    //firstname
    await page.getByLabel("First name").fill("temba");
    //lastname
    await page.locator("#LastName").fill("josh");
    //email
    await page.locator("#Email").fill("sarife2782@calorpg.com");
    //company name
    await page.getByLabel("Company name").fill('tembs sports')
    //password 
    await page.locator('#Password').fill('A5b#9x')
    //confirm password
    await page.getByLabel('Confirm password').fill('A5b#9x')
    //checkbox
    await page.locator('#accept-consent').check();
    //register button
    await page.getByRole('button', { name: 'Register' }).click(); 

    







     await page.pause();


}

)
