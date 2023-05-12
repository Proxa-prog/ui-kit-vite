import ButtonIconPage from "../pageobjects/buttonIconPage.ts";

describe('buttonIcon', () => {
    it('primary after hover should match the #0065d8 color', async () => {
        await ButtonIconPage.open('buttonIcon');
        const backgroundColorBeforeHover = await ButtonIconPage.ButtonIcon('primary').getCSSProperty('background-color');
        const hex = backgroundColorBeforeHover.parsed.hex;
        await expect(hex).toBe('#0078ff');

        await ButtonIconPage.hover(32, 32);
        const primaryBackgroundColorAfterHover = await ButtonIconPage.ButtonIcon('primary').getCSSProperty('background-color');
        const primaryHexAfterHover = primaryBackgroundColorAfterHover.parsed.hex;
        await expect(primaryHexAfterHover).toBe('#0065d8')
    });

    it('secondary after hover should match the #c8e5ff color', async () => {
        await ButtonIconPage.open('buttonIcon');
        const backgroundColorBeforeHover = await ButtonIconPage.ButtonIcon('secondary').getCSSProperty('background-color');
        const hex = backgroundColorBeforeHover.parsed.hex;
        await expect(hex).toBe('#dff0ff');

        await ButtonIconPage.hover(85, 32);
        const backgroundColorAfterHover = await ButtonIconPage.ButtonIcon('secondary').getCSSProperty('background-color');
        const hexAfterHover = backgroundColorAfterHover.parsed.hex;
        await expect(hexAfterHover).toBe('#c8e5ff');
    });

    it('tertiary after hover should match the #c8e5ff color', async () => {
        await ButtonIconPage.open('buttonIcon');
        const backgroundColorBeforeHover = await ButtonIconPage.ButtonIcon('tertiary').getCSSProperty('background-color');
        const hex = backgroundColorBeforeHover.parsed.hex;
        await expect(hex).toBe('#f3f7fb');

        await ButtonIconPage.hover(138, 32);
        const backgroundColorAfterHover = await ButtonIconPage.ButtonIcon('tertiary').getCSSProperty('background-color');
        const hexAfterHover = backgroundColorAfterHover.parsed.hex;
        await expect(hexAfterHover).toBe('#c8e5ff');
    });

    it('error after hover should match the #f1bbc0 color', async () => {
        await ButtonIconPage.open('buttonIcon');
        const backgroundColorBeforeHover = await ButtonIconPage.ButtonIcon('error').getCSSProperty('background-color');
        const hex = backgroundColorBeforeHover.parsed.hex;
        await expect(hex).toBe('#fde6eb');

        await ButtonIconPage.hover(191, 32);
        const backgroundColorAfterHover = await ButtonIconPage.ButtonIcon('error').getCSSProperty('background-color');
        const hexAfterHover = backgroundColorAfterHover.parsed.hex;
        await expect(hexAfterHover).toBe('#f1bbc0');
    });

    it('moreColorOn after hover should match the #c8e5ff color', async () => {
        await ButtonIconPage.open('buttonIcon');
        const backgroundColorBeforeHover = await ButtonIconPage.ButtonIcon('moreColorOn').getCSSProperty('background-color');
        const hex = backgroundColorBeforeHover.parsed.hex;
        await expect(hex).toBe('#f9f9f9');

        await ButtonIconPage.hover(244, 32);
        const backgroundColorAfterHover = await ButtonIconPage.ButtonIcon('moreColorOn').getCSSProperty('background-color');
        const hexAfterHover = await backgroundColorAfterHover.parsed.hex;
        await expect(hexAfterHover).toBe('#c8e5ff');
    });

    it('settings after hover should match the #c8e5ff color', async () => {
        await ButtonIconPage.open('buttonIcon');
        const backgroundColorBeforeHover = await ButtonIconPage.ButtonIcon('settings').getCSSProperty('background-color');
        const hex = backgroundColorBeforeHover.parsed.hex;
        await expect(hex).toBe('#f3f7fb');

        await ButtonIconPage.hover(350, 32);
        const backgroundColorAfterHover = await ButtonIconPage.ButtonIcon('settings').getCSSProperty('background-color');
        const hexAfterHover = await backgroundColorAfterHover.parsed.hex;
        await expect(hexAfterHover).toBe('#c8e5ff');
    });
})