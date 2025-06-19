import {test,expect} from '@playwright/test'

test("search product category",async({page})=>{
    await page.goto("/")

    await page.getByPlaceholder("Search store").fill("asus")

    const categorydropdown='select#SearchCategoryId';

    await page.selectOption(categorydropdown,{value:'1'})

    await page.waitForTimeout(2000);

   // await page.getByText("Search").click();

   await page.getByRole('button', { name: 'Search' }).click();


    await page.waitForTimeout(2000);




})
