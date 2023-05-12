import { expect, test } from 'vitest'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import puppeteer from "puppeteer";

expect.extend({toMatchImageSnapshot}); // Устраняет Invalid Chai property: toMatchImageSnapshot

test('ButtonFilter', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/buttonFilter', {
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const element = await page.$('#buttonFilter');
    const result = await element?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'pixelmatch',
        failureThreshold: 0.02,
        failureThresholdType: 'percent',
        allowSizeMismatch: true,
        diffDirection: 'vertical',
        onlyDiff: true,
    });
});