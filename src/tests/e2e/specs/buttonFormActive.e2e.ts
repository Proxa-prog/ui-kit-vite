import ButtonFormPage from "../pageobjects/buttonFormPage.ts";

describe('ButtonForm click, check counter color after click', () => {
    it('ButtonForm  should match the specified colors', async () => {
        await ButtonFormPage.open('buttonForm');
        const backgroundColorBeforeClick = await ButtonFormPage.buttonForm.getCSSProperty('background-color');
        const hex = await (backgroundColorBeforeClick).parsed.hex;
        await expect(hex).toBe('#ffffff');

        await ButtonFormPage.hover();
        const backgroundColorAfterClick = await ButtonFormPage.buttonForm.getCSSProperty('background-color');
        const hexAfterClick = await (backgroundColorAfterClick).parsed.hex;
        await expect(hexAfterClick).toBe('#f3f7fb');

        ButtonFormPage.clickAndHold();
        const backgroundColorActive = await ButtonFormPage.buttonForm.getCSSProperty('background-color');
        const hexActive = await (backgroundColorActive).parsed.hex;
        await expect(hexActive).toBe('#0078ff');
    });
})