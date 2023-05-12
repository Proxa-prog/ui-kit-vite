import { expect, test } from 'vitest'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import puppeteer from "puppeteer";

expect.extend({toMatchImageSnapshot}); // Устраняет Invalid Chai property: toMatchImageSnapshot

test('buttonPrimary', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/button', {
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const elementPrimary = await page.$('#primary');
    const result = await elementPrimary?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.001,
        failureThresholdType: 'percent',
        diffDirection: 'vertical',
    });
});

test('buttonSecondary', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/button', {
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const elementSecondary = await page.$('#secondary');
    const result = await elementSecondary?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.001,
        failureThresholdType: 'percent',
        diffDirection: 'vertical',
    });
});

test('buttonTertiary', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/button',{
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const elementTertiary = await page.$('#tertiary');
    const result = await elementTertiary?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.001,
        failureThresholdType: 'percent',
        diffDirection: 'vertical',
    });
});
