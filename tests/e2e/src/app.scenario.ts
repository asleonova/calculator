import { browser } from "@wdio/globals";

describe('Calculator Application', () => {
  let page: any;

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:8080/src/index.html');
  });

  afterEach(async () => {
    await page.close();
  });

  it('should add two numbers and display the result', async () => {
    await page.fill('#number1', '2');
    await page.fill('#number2', '3');
    await page.click('#add');
    const resultText = await page.innerText('#result');
    expect(resultText).toBe('Result: 5');
  });

  it('should subtract two numbers and display the result', async () => {
    await page.fill('#number1', '5');
    await page.fill('#number2', '3');
    await page.click('#subtract');
    const resultText = await page.innerText('#result');
    expect(resultText).toBe('Result: 2');
  });

  it('should multiply two numbers and display the result', async () => {
    await page.fill('#number1', '2');
    await page.fill('#number2', '3');
    await page.click('#multiply');
    const resultText = await page.innerText('#result');
    expect(resultText).toBe('Result: 6');
  });

  it('should divide two numbers and display the result', async () => {
    await page.fill('#number1', '6');
    await page.fill('#number2', '3');
    await page.click('#divide');
    const resultText = await page.innerText('#result');
    expect(resultText).toBe('Result: 2');
  });
});