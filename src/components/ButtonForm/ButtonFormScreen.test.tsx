import { expect, test } from 'vitest'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import puppeteer from "puppeteer";

expect.extend({toMatchImageSnapshot}); // Устраняет Invalid Chai property: toMatchImageSnapshot

test('ButtonForm', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/buttonForm', {
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const element = await page.$('#buttonForm');
    const result = await element?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.001,
        failureThresholdType: 'percent',
        allowSizeMismatch: true,
        diffDirection: 'vertical',
    });
});