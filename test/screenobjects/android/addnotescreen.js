class addNoteScreen {
    get plusIcon(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }

    get textOption(){
        return $('//*[@text="Text"]');
    }

    get textEditing(){
        return $('//*[@text="Editing"]');
    }

    get noteTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get noteBody(){
       return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get savingNotes(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]');
    }

    get threeButtons(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]');
    }
    get findDeleteOption(){
        return $('//*[@text="Delete"]');
    }

    get popupForDelete(){
        return $('//*[@text="OK"]');
    }

    get deletedoption(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text_button_center"]');
    }

    get threeOptionMainScreen(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCan(){
        return $('//*[@text="Trash Can"]');
    }

    get trashTitle(){
        return $('//*[@text="Sport"]');
    }



}
module.exports = new addNoteScreen();
