import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base-page";

export class LoginModal extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.emailInput = page.locator("[data-cy='login-form-email']");
    this.passwordInput = page.locator("[data-cy='login-form-password']");
    this.submitButton = page.locator("[data-cy='login-form-submit']");
    this.errorMessage = page.locator('.message__message[data-sms-validation-target="message"]');

  }
}
