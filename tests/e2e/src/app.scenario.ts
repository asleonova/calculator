import { $ } from "@wdio/globals";
import Page from "./pageobjects/page";

fdescribe("Calculator Application", () => {
  let page: Page;
  page = new Page();

  beforeEach(async () => {
    page.open();
  });

  afterEach(async () => {});

  it("should add two numbers and display the result", async () => {
    const nb1 = $("#number1");
    const nb2 = $("#number2");
    await nb1.setValue(1);
    await nb2.setValue(2);

    await $("#add").click();
    const resultText = await $("#result").getText();
    expect(resultText).toBe("Result: 3");
  });

  it("should subtract two numbers and display the result", async () => {
    const nb1 = $("#number1");
    const nb2 = $("#number2");
    await nb1.setValue(5);
    await nb2.setValue(3);

    await $("#subtract").click();
    const resultText = await $("#result").getText();
    expect(resultText).toBe("Result: 2");
  });

  it("should multiply two numbers and display the result", async () => {
    const nb1 = $("#number1");
    const nb2 = $("#number2");
    await nb1.setValue(2);
    await nb2.setValue(3);

    await $("#multiply").click();
    const resultText = await $("#result").getText();
    expect(resultText).toBe("Result: 6");
  });

  it("should divide two numbers and display the result", async () => {
    const nb1 = $("#number1");
    const nb2 = $("#number2");
    await nb1.setValue(6);
    await nb2.setValue(3);

    await $("#divide").click();
    const resultText = await $("#result").getText();
    expect(resultText).toBe("Result: 2");
  });
});
