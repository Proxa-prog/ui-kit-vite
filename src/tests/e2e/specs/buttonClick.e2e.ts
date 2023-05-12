import ButtonPage from '../pageobjects/button.page.ts'

describe('Button click, check color after click', () => {
    it('should add 1 to button title', async () => {
        await ButtonPage.open('button')
        await ButtonPage.click();
        await expect(ButtonPage.toggleBtn).toHaveTextContaining('BUTTON1');
    })

    it('primary should match the specified colors', async () => {
        await ButtonPage.open('button')
        const backgroundColor = await ButtonPage.toggleBtn.getCSSProperty('background-color');
        const hex = (backgroundColor).parsed.hex;
        await expect(hex).toBe('#0078ff')

        await ButtonPage.clickAndHold(78, 22);

        const backgroundColorAfterClick = await ButtonPage.ButtonId('primary').getCSSProperty('background-color');
        const backgroundImageAfterClick = await ButtonPage.ButtonId('primary').getCSSProperty('background-image');
        const colorAfterClickHex = (backgroundColorAfterClick).parsed.hex;
        const imageAfterClickValue = (backgroundImageAfterClick).value;
        await expect(colorAfterClickHex).toBe('#0065d8')
        await expect(imageAfterClickValue).toBe('radial-gradient(36.59% 100.8% at 50% 50%, rgba(255, 255, 255, 0.3) 99.54%, rgba(255, 255, 255, 0) 100%)')
    });

    it('secondary should match the specified colors', async () => {
        await ButtonPage.open('button')
        const backgroundColor = await ButtonPage.toggleBtnSecondary.getCSSProperty('background-color');
        const hex = (backgroundColor).parsed.hex;
        await expect(hex).toBe('#ffffff')

        await ButtonPage.clickAndHold(223, 22);

        const backgroundColorAfterClick = await ButtonPage.ButtonId('secondary').getCSSProperty('background-color');
        const backgroundImageAfterClick = await ButtonPage.ButtonId('secondary').getCSSProperty('background-image');
        const colorAfterClickHex = (backgroundColorAfterClick).parsed.hex;
        const imageAfterClickValue = (backgroundImageAfterClick).value;
        await expect(colorAfterClickHex).toBe('#dff0ff')
        await expect(imageAfterClickValue).toBe('radial-gradient(36.59% 100.8% at 50% 50%, rgb(200, 229, 255) 99.54%, rgba(255, 255, 255, 0) 100%)')
    });

    it('tertiary should match the specified colors', async () => {
        await ButtonPage.open('button')
        const backgroundColor = await ButtonPage.toggleBtnTertiary.getCSSProperty('background-color');
        const hex = (backgroundColor).parsed.hex;
        await expect(hex).toBe('#fde6eb')

        await ButtonPage.clickAndHold(363, 22);

        const backgroundColorAfterClick = await ButtonPage.toggleBtnTertiary.getCSSProperty('background-color');
        const backgroundImageAfterClick = await ButtonPage.toggleBtnTertiary.getCSSProperty('background-image');
        const colorAfterClickHex = (backgroundColorAfterClick).parsed.hex;
        const imageAfterClickValue = (backgroundImageAfterClick).value;
        await expect(colorAfterClickHex).toBe('#f1bbc0')
        await expect(imageAfterClickValue).toBe('radial-gradient(36.59% 100.8% at 50% 50%, rgb(241, 187, 192) 99.54%, rgba(255, 255, 255, 0) 100%)')
    });
})
