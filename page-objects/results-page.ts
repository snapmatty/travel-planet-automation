import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class ResultsPage extends BasePage {
  readonly destinationPicker: Locator;

  constructor(page: Page) {
    super(page);

    this.destinationPicker = page.locator("[data-cy='sf-destination-picker-textbox']");
  }
}
