const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

let driver;

describe("入力フォーム デモ", () => {
  // テスト開始前にドライバーを起動
  beforeAll(() => {
    driver = new Builder().forBrowser("chrome").build();
  });

  // テスト終了後にドライバーを終了
  afterAll(() => driver.quit());

  test("名前欄の必須入力チェック その1", async () => {
    // テスト対象のページへアクセス
    await driver.get("https://ics-creative.github.io/180523_selenium_webdriver/");

    // 何も入力せずにSubmitする
    await driver.findElement(By.id("submitButton")).click();

    // エラーメッセージを取得して、エラー文言が正しいかチェックする
    const errorMessage = await driver.findElement(By.id("error_name")).getText();
    assert.equal(errorMessage, "名前を入力してください。");
  });

  test("名前欄の必須入力チェック その2", async () => {
    // テスト対象のページへアクセス
    await driver.get("https://ics-creative.github.io/180523_selenium_webdriver/");

    // 名前を入力してSubmitする
    await driver.findElement(By.id("name")).sendKeys("品川太郎");
    await driver.findElement(By.id("submitButton")).click();

    // エラーメッセージを取得して、エラー文言が空であるかチェックする
    const errorMessage = await driver.findElement(By.id("error_name")).getText();
    assert.equal(errorMessage, "");
  });
});
