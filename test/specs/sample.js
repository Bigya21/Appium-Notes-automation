describe('Sample', ()=>{
    it('Sample Test', async() =>{
        await $('~App').click();
        await $('~Loader').click();
        await $('~Cursor').click();
        await $('~Activity').click();
        await $('~Animation').click();
    });
});

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
});