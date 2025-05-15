import { Builder, By } from "selenium-webdriver";
import { describe, beforeAll, afterAll, test, expect } from "vitest";

let driver;

describe("入力フォーム デモ", () => {
  // テスト開始前にドライバーを起動
  beforeAll(async () => {
    driver = new Builder().forBrowser("chrome").build();
  });

  // テスト終了後にドライバーを終了
  afterAll(async () => await driver.quit());

  test("名前欄の必須入力チェック その1", async () => {
    // テスト対象のページへアクセス
    await driver.get("https://ics-creative.github.io/180523_selenium_webdriver/");

    // 何も入力せずにSubmitする
    await driver.findElement(By.id("submitButton")).click();

    // エラーメッセージを取得して、エラー文言が正しいかチェックする
    const errorMessage = await driver.findElement(By.id("error_name")).getText();
    expect(errorMessage).toBe("名前を入力してください。");
  });

  test("名前欄の必須入力チェック その2", async () => {
    // テスト対象のページへアクセス
    await driver.get("https://ics-creative.github.io/180523_selenium_webdriver/");

    // 名前を入力してSubmitする
    await driver.findElement(By.id("name")).sendKeys("品川太郎");
    await driver.findElement(By.id("submitButton")).click();

    // エラーメッセージを取得して、エラー文言が空であるかチェックする
    const errorMessage = await driver.findElement(By.id("error_name")).getText();
    expect(errorMessage).toBe("");
  });
});
