describe('test', () => {
    it('add notes', async() => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        //add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Sport");

        //add note body
        await $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Chess \n Football \n  Badminton \n");

        //for saving the notes to click the write icon on the left top corner
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]').click();

        //for deleting the note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]').click();
        await $('//*[@text="Delete"]').click();
        await $('//*[@text="OK"]').click();

        //assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text_button_center"]')).toBeDisplayed();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Trash Can"]').click();

        await expect($('//*[@text="Sport"]')).toBeDisplayed();

    });
});