describe('Android Element Tests', () => {
    it('Find element by accessibility id', async() => {
        //find element by accessibility id
        const appOption = await $('~App');

        //click on element
        await appOption.click();

        //assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it('Find element by classname', async() => {
        //fnd element by classname
        const className = await $('android.widget.TextView');
        console.log(await className.getText());   
        
        //assertion
        await expect(className).toHaveText("API Demos");
    });

    xit('find element by xpath', async() => {
        //xpath - (//tagname[@attribute = value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //find by resource id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();   
        
        //find element by text 
        await $('//android.widget.TextView[@text="Command two"]').click();

        //find element by class - assertion
        const textAssertion = await $('android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    it('find element by UIAutomator', async() => {
        //find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();        
    });

    it('Find multiple elements', async() => {
        const expectedList = ['API Demos', "Access'ibility", 'Accessibility', 'Animation', 'App', 'Content', 'Graphics', 'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views']
        const actualList =[]

        //find multiple elements
        const textList = await $$('android.widget.TextView');

        //loop through them
        for (const element of textList){
            actualList.push(await element.getText());

        }

        //assert the list
        await expect(actualList).toEqual(expectedList);
        
    });


    //exercise
    it.only('This is an exercise', async() => {
        await $('~Views').click();
        await $('~Auto Complete').click(); 
        await $('~1. Screen Top').click(); 
        
        //enter the country name
        const textField = await $('//*[@resource-id ="io.appium.android.apis:id/edit"]');
        await textField.addValue('Canada');

        await expect(textField).toHaveText("Canada");
    });
});

