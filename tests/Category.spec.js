import {test,expect} from '@playwright/test'

test("show category",async({page})=>{

    await page.goto("/")

    await page.waitForTimeout(2000);
    //for bike category
    await page.goto("/bike")
    await page.waitForTimeout(8000);
    await page.goBack();

    await page.waitForTimeout(10000);

    

     //for cumputer category
     await page.goto("/computers")
     await page.waitForTimeout(8000);
     await page.goBack();

     await page.waitForTimeout(10000);


     //for electronics category
     await page.goto("/electronics")
     await page.waitForTimeout(8000);
     await page.goBack();

     await page.waitForTimeout(10000);


    //    //for apparel category
     await page.goto("/apparel")
     await page.waitForTimeout(8000);
     await page.goBack();

     await page.waitForTimeout(10000);

    //    //for digital-downloads category
     await page.goto("/digital-downloads")
     await page.waitForTimeout(8000);
     await page.goBack();

     await page.waitForTimeout(10000);


    // //for books category
     await page.goto("/books")
     await page.waitForTimeout(8000);
     await page.goBack();

     await page.waitForTimeout(10000);


    //  //for jewelry category
     await page.goto("/jewelry")
     await page.waitForTimeout(8000);
     await page.goBack();

     await page.waitForTimeout(10000);


    //  //for gift-cards category
     await page.goto("/gift-cards")
     await page.waitForTimeout(8000);
     await page.goBack();






     






   

     



     

       await page.pause();

    //  await page.waitForTimeout(10000);

  






})