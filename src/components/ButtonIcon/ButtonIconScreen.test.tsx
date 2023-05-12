import { expect, test } from 'vitest'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import puppeteer from "puppeteer";

expect.extend({ toMatchImageSnapshot }); // Устраняет Invalid Chai property: toMatchImageSnapshot

test('ButtonIcon primary screenshot test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/buttonIcon', {
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const element = await page.$('#primary');
    const result = await element?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.02,
        failureThresholdType: 'percent',
        allowSizeMismatch: true,
        diffDirection: 'vertical',
    });
});

test('ButtonIcon secondary screenshot test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/buttonIcon', {
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const element = await page.$('#secondary');
    const result = await element?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.02,
        failureThresholdType: 'percent',
        allowSizeMismatch: true,
        diffDirection: 'vertical',
    });
});

test('ButtonIcon tertiary screenshot test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/buttonIcon', {
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const element = await page.$('#tertiary');
    const result = await element?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.02,
        failureThresholdType: 'percent',
        allowSizeMismatch: true,
        diffDirection: 'vertical',
    });
});

test('ButtonIcon error screenshot test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/buttonIcon', {
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const element = await page.$('#error');
    const result = await element?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.02,
        failureThresholdType: 'percent',
        allowSizeMismatch: true,
        diffDirection: 'vertical',
    });
});

test('ButtonIcon moreColorOn screenshot test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/buttonIcon', {
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const element = await page.$('#moreColorOn');
    const result = await element?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.02,
        failureThresholdType: 'percent',
        allowSizeMismatch: true,
        diffDirection: 'vertical',
    });
});

test('ButtonIcon moreColorOff screenshot test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/buttonIcon', {
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const element = await page.$('#moreColorOff');
    const result = await element?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.02,
        failureThresholdType: 'percent',
        allowSizeMismatch: true,
        diffDirection: 'vertical',
    });
});

test('ButtonIcon settings screenshot test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/buttonIcon', {
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const element = await page.$('#settings');
    const result = await element?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.02,
        failureThresholdType: 'percent',
        allowSizeMismatch: true,
        diffDirection: 'vertical',
    });
});

test('ButtonIcon tertiaryERZL screenshot test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/buttonIcon', {
        timeout: 3000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });
    const element = await page.$('#tertiaryERZL');
    const result = await element?.screenshot();
    expect(result).toMatchImageSnapshot({
        comparisonMethod: 'ssim',
        failureThreshold: 0.001,
        failureThresholdType: 'percent',
        allowSizeMismatch: true,
        diffDirection: 'vertical',
    });
});