import Page from './page.ts';

class ButtonFormPage extends Page {
    public get buttonForm() {
        return $('#buttonForm');
    }

    public async hover() {
        await browser.action('pointer')
            .move({x: 50, y: 10}) // координаты элемента от левого верхнего края
            .perform()
    }

    public clickAndHold() {
        browser.action('pointer')
            .move({x: 50, y: 10}) // координаты элемента от левого верхнего края
            .down('left') // left button
            .pause(3)
            .perform()
    }

    public open (url?: string) {
        return super.open(url);
    }
}

export default new ButtonFormPage();