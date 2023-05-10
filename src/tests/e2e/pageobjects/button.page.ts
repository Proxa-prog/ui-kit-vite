import Page from './page.ts';

class ButtonPage extends Page {

    public get toggleBtn() {
        return $('#button')
    }

    public async click () {
        await this.toggleBtn.click();
    }

    public open (url?: string) {
        return super.open(url);
    }
}

export default new ButtonPage();
