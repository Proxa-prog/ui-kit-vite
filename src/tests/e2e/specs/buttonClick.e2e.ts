import ButtonPage from '../pageobjects/button.page.ts'

describe('Button click', () => {
    it('should add 1 to button title', async () => {
        await ButtonPage.open('button')
        await ButtonPage.click();

        await expect(ButtonPage.toggleBtn).toHaveTextContaining('BUTTON1')
    })
})
