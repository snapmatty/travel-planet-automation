import { Page, Locator } from "@playwright/test";
export class BasePage {
  readonly page: Page;
  readonly head: Locator;
  readonly body: Locator;
  readonly acceptCookiesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.head = page.locator("head");
    this.body = page.locator("body");
    this.acceptCookiesButton = page.locator(
      "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"
    );
  }

  async fillInput(label: string, text: string) {
    const input = await this.page.getByLabel(label);
    await input.fill(text);
  }

  async clickButton(buttonName: string) {
    const button = await this.page.getByRole("button", { name: buttonName });
    await button.click();
  }

  async waitForAnimation(timeout: number = 3000) {
    await this.page.waitForTimeout(timeout);
  }

  async goto(path: string = "/") {
    await this.page.goto(path);
  }

  async handleCookiesPopUp() {
    try {
      (await this.page
        .locator("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll")
        .isVisible()) &&
        (await this.page
          .locator("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll")
          .click());
    } catch (error) {}
  }

  async handleNotifiationPopUp() {
    try {
      await this.page
        .locator(".samba-popup-iframe")
        .contentFrame()
        .locator("#accept-btn")
        .click();
    } catch (error) {}
  }
}
