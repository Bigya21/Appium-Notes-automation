const addNoteScreen = require("../../screenobjects/android/addnotescreen");

describe('test', () => {
    it('add notes and delete', async() => {
        // Click on plus icon to add a new note
        await addNoteScreen.plusIcon.click();
        
        // Select the option for adding text
        await addNoteScreen.textOption.click();
        
        // Check if text editing is displayed
        await expect(addNoteScreen.textEditing).toBeDisplayed();

        // Add note title
        await addNoteScreen.noteTitle.addValue("Sport");

        // Add note body
        await addNoteScreen.noteBody.addValue("Chess \n Football \n Badminton \n");

        // Save the note by clicking the save icon
        await addNoteScreen.savingNotes.click();

        // Click on three dots to open options
        await addNoteScreen.threeButtons.click();

        // Find and click on delete option
        await addNoteScreen.findDeleteOption.click();

        // Confirm deletion
        await addNoteScreen.popupForDelete.click();

        // Assertion for deleted option
        await expect(addNoteScreen.deletedoption).toBeDisplayed();

        // Navigate to trash can
        await addNoteScreen.threeOptionMainScreen.click();
        await addNoteScreen.trashCan.click();

        // Check if deleted note is in the trash can
        await expect(addNoteScreen.trashTitle).toBeDisplayed();
    });
});
