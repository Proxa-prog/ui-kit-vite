import { expect, test } from 'vitest'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import puppeteer from "puppeteer";
import { renderToStaticMarkup } from 'react-dom/server';
import { Accordion } from "/src/index.ts";

expect.extend({toMatchImageSnapshot}); // Устраняет Invalid Chai property: toMatchImageSnapshot

test('Accordion', async () => {
    const html = renderToStaticMarkup(<Accordion title='Testing'><h4>Content</h4></Accordion>);
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