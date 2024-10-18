import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class ReservationPage extends BasePage {
  readonly additionalServicesButton: Locator;
  readonly finalPrice: Locator;

  constructor(page: Page) {
    super(page);

    this.additionalServicesButton = page.locator('[data-cy="checkoutSubmit"]');
    this.finalPrice = page.locator('[data-cy="price"]');
  }
}
