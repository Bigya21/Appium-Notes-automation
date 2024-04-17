describe('Android native feature tests', () => {
    it('Access an activity directly', async() => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        //pause 3s
        await driver.pause(3000);

        //assertion
        await expect ($('//*[@text="App/Alert Dialogs"]')).toExist();
    });  
    it('Working with Dialog Boxes', async() => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        //click on the first dialog box
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //accept alert
        // await driver.acceptAlert();

        //dismiss alert
        // await driver.dismissAlert();

        //get alert text
        console.log('ALERT TEXT -->', await driver.getAlertText());

        //click on the OK button
        await $('//android.widget.Button[@text="OK"]').click();

        //assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();      
    });
    it('Vertical Scrolling', async() => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.ApiDemos");
        await $('~App').click();
        await $('~Activity').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Secure Surfaces"))').click();

    // assertion
    await expect($('~Secure Dialog')).toExist();
       
    });
    // it.only('Vertical Scrolling', async() => {
    //     await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.ApiDemos");
    //     await $('~App').click();
    //     await $('~Activity').click();
    
    //     // Perform vertical scrolling
    //     await driver.touchAction([
    //         { action: 'press', x: 500, y: 1800 },
    //         { action: 'moveTo', x: 500, y: 200 },
    //         'release'
    //     ]);
    //     await $('~Secure Surfaces').click();

    //     //assertion
    //     await expect($('~Secure Dialog')).toExist();
    // });

    it('Horizontal Scrolling', async() => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");
        // await $("~Views").click();
        // await $("~Gallery").click();
        // await $('*//[@resource-id="android:id/text1"').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        await driver.pause(3000);
    });

    it.only('Scrolling Exercise: date picker', async() => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1");
        
        // Get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();
    
        // Click on the date button 
        await $('~change the date').click();
    
        // Scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    
        // Select the 10th date
        await $('//*[@text="10"]').click();
    
        // Click ok button
        await $('//*[@resource-id="android:id/button1"]').click();
    
        // Assertion
        const updatedDate = await date.getText();
        expect(updatedDate).not.toEqual(currentDate);
    });
    
});