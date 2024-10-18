import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class ResultsPage extends BasePage {
  readonly submitButton: Locator;
  readonly consentCheckbox: Locator;
  readonly emailInput: Locator;
  readonly phoneNumberInput: Locator;

  constructor(page: Page) {
    super(page);

    this.submitButton = page.locator('button[type="submit"].btn--main');
    this.consentCheckbox = page.locator('input[type="checkbox"][name="order-form-gdpr-consent"]');
    this.emailInput = page.locator('input[type="email"][name="order-user-email"]');
    this.phoneNumberInput = page.locator('input[type="tel"]');
  }
}
