describe('Web Browser Access', () => {
    before(async() => {
        
    });
    it('Access external link and verify content in the browser', async() => {
        //clicking on the nav icon
        (await $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')).click();  
        
        //click on the fb link
        (await $('//*[@text = "Like us on Facebook"]')).click();

        //get current context
        // console.log(await driver.getContext())
        // await driver.pause(2000);

        //get all the contexts
        await driver.getContexts();

        //switch to webview chrome context
        await driver.switchContext('WEBVIEW_chrome');

        //assert the cover photo is displayed
        const coverImg = await $('img _4s0y');
        await expect(coverImg).toBeDisplayed();

    });

    

 
    
});