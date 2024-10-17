import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class ResultsPage extends BasePage {
  readonly destinationPicker: Locator;
  readonly secondPageButton: Locator;

  constructor(page: Page) {
    super(page);

    this.destinationPicker = page.locator("[data-cy='sf-destination-picker-textbox']");
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




