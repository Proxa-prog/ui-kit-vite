import Page from './page.ts';

class ButtonPage extends Page {
    public Button(id: string) {
        return $(`#${id}`);
    }

    public get toggleBtn() {
        return $('#primary')
    }

    public get toggleBtnSecondary() {
        return $('#secondary')
    }

    public get toggleBtnTertiary() {
        return $('#tertiary')
    }

    public clickAndHold(x: number, y: number) {
        browser.action('pointer')
            .move({x: x, y: y}) // координаты элемента от левого верхнего края
            .down('left') // left button
            .pause(3)
            .perform()
    }

    public async hover() {
        await browser.action('pointer')
            .move({x: 223, y: 25}) // координаты элемента от левого верхнего края
            .perform()
    }

    public ButtonId(id: string) {
        return $(`#${id}`)
    }

    public async click () {
        await this.toggleBtn.click();
    }

    public open (url?: string) {
        return super.open(url);
    }
}

export default new ButtonPage();
