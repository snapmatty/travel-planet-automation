import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class HomePage extends BasePage {
  readonly loginModalButton: Locator;
  readonly destinationPicker: Locator;
  readonly datePicker: Locator;
  readonly transportationPicker: Locator;
  readonly adultPassengerSelector: Locator;
  readonly childPassengerSelector: Locator;
  readonly submitSearchButton: Locator;
  readonly pageElements;

  constructor(page: Page) {
    super(page);

    this.loginModalButton = page.locator("button[data-cy='header-user-box-toggle-button']");
    this.destinationPicker = page.locator("[data-cy='sf-destination-picker-textbox']");
    this.datePicker = page.locator("[data-cy='sf-destination-picker-textbox']");
    this.transportationPicker = page.locator("[data-cy='sf-transportation-picker-textbox']");
    this.adultPassengerSelector = page.locator("[data-cy='person-textbox-control-adults']");
    this.childPassengerSelector = page.locator("[data-cy='person-textbox-control-children']");
    this.submitSearchButton = page.locator("[data-cy='sf-submit-button']");


    this.pageElements = {
      loginModalButton: this.loginModalButton,
      destinationPicker: this.destinationPicker,
      datePicker: this.datePicker,
      transportationPicker: this.transportationPicker,
      adultPassengerSelector: this.adultPassengerSelector,
      childPassengerSelector: this.childPassengerSelector,
      submitSearchButton: this.submitSearchButton,
    }
  }
}
