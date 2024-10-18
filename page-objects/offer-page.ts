import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class OfferSelectionPage extends BasePage {
  readonly destinationPicker: Locator;
  readonly secondPageButton: Locator;
  readonly firstSearchResult: Locator;

  constructor(page: Page) {
    super(page);

    this.destinationPicker = page.locator("[data-cy='sf-destination-picker-textbox']");
    this.firstSearchResult = page.locator('a[data-controller="gtm ga"][data-ga-click-data-value*="tour_detail_button_click"]').first();
  }
  paginationButton(pageNumber: number) {
    return this.page.locator(`button.pagination__link:has-text("${pageNumber}")`);
  }

  async clickPaginationButton(pageNumber: number) {
    
    const paginationButton = this.paginationButton(pageNumber);
    await paginationButton.waitFor({state:'visible'});
    await paginationButton.click();
}
}




