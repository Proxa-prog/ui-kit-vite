import { expect, test } from 'vitest'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import puppeteer from "puppeteer";
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from "/src/index.ts";

expect.extend({toMatchImageSnapshot}); // Устраняет Invalid Chai property: toMatchImageSnapshot

test('button', async () => {
    const html = renderToStaticMarkup(<Button>Кнопка</Button>);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const result = await page.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.001,
        failureThresholdType: 'percent'
    });
});