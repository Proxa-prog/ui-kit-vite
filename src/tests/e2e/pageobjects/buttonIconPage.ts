import Page from './page.ts';

class ButtonIconPage extends Page {
    public ButtonIcon(id: string) {
        return $(`#${id}`);
    }

    public async hover(x: number, y: number) {
        await browser.action('pointer')
            .move({x: x, y: y}) // координаты элемента от левого верхнего края
            .perform()
    }

    public open (url?: string) {
        return super.open(url);
    }
}

export default new ButtonIconPage();