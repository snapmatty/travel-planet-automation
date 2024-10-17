import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { travelEndDate, travelStartDate } from "../helpers/test.data";

export class HomePage extends BasePage {
  readonly loginModalButton: Locator;
  readonly destinationPicker: Locator;
  readonly destinationPickerPopup: Locator;
  readonly destinationPickerPopupSaveButton: Locator;
  readonly datePicker: Locator;
  readonly datePickerSaveButton: Locator;
  readonly datePickerStartDateInput: Locator;
  readonly datePickerEndDateInput: Locator;
  readonly calendarStartDate: Locator;
  readonly calendarEndDate: Locator;
  readonly adultPassengerSelector: Locator;
  readonly childPassengerSelector: Locator;
  readonly transportationPicker: Locator;
  readonly submitSearchButton: Locator;
  readonly pageElements;
 

  constructor(page: Page) {
    super(page);

    this.loginModalButton = page.locator("button[data-cy='header-user-box-toggle-button']");
    this.destinationPicker = page.locator("[data-cy='sf-destination-picker-textbox']");
    this.destinationPickerPopup = page.locator("[data-cy='sf-destination-picker-popup-search-textbox']");
    this.destinationPickerPopupSaveButton = page.locator("[data-cy='sf-destination-picker-popup-save-button']");
    this.datePicker = page.locator("[data-cy='sf-datepicker-textbox']");
    this.datePickerStartDateInput = page.locator("[data-cy='sf-datepicker-start-date-textbox']");
    this.datePickerSaveButton = page.locator("[data-cy='sf-datepicker-popup-save-button']");
    this.calendarStartDate = page.locator(`[id='datepicker-calendar-day-${travelStartDate}']`);
    this.calendarEndDate = page.locator(`[id='datepicker-calendar-day-${travelEndDate}']`);
    this.datePickerEndDateInput = page.locator("[data-cy='sf-datepicker-end-date-textbox']");
    this.adultPassengerSelector = page.locator("[data-cy='person-textbox-control-adults']");
    this.childPassengerSelector = page.locator("[data-cy='person-textbox-control-children']");
    this.transportationPicker = page.locator("[data-cy='sf-transportation-picker-textbox']");
    this.submitSearchButton = page.locator("[data-cy='sf-submit-button']");


    this.pageElements = {
      loginModalButton: this.loginModalButton,
      destinationPicker: this.destinationPicker,
      destinationPickerPopup: this.destinationPickerPopup,
      destinationPickerPopupSaveButton: this.destinationPickerPopupSaveButton,
      datePicker: this.datePicker,
      datePickerSaveButton: this.datePickerSaveButton,
      datePickerStartDateInput: this.datePickerStartDateInput,
      datePickerEndDateInput: this.datePickerEndDateInput,
      transportationPicker: this.transportationPicker,
      adultPassengerSelector: this.adultPassengerSelector,
      childPassengerSelector: this.childPassengerSelector,
      submitSearchButton: this.submitSearchButton,
    }
  }

  async selectDestination(desiredDestination: string, language: string) {

    const destinationTranslations = {
      Warsaw: {
        pl: "Warszawa",
        sk: "Varšava",
        hu: "Varsova",
        cz: "Warszawa",
      },
      Egypt: {
        pl: "Egipt",
        sk: "Egypt",
        hu: "Egyiptom",
        cz: "Egypt",
      },
    };

    const translatedDestination = destinationTranslations[desiredDestination]?.[language];

    if(!translatedDestination) {
      throw new Error(`Destination ${desiredDestination} is not found for language: ${language}`);
    }

    await this.destinationPicker.click();
    const firstDestinationCheckbox = this.page.locator(`[aria-label="${translatedDestination}"] input[type="checkbox"]`).first();
    await firstDestinationCheckbox.check();
    await this.destinationPickerPopupSaveButton.click();
  }
  

  async selectTravelDate() {

    await this.datePicker.click();
    await this.calendarStartDate.click();
    await this.calendarEndDate.click(); 
    await this.datePickerSaveButton.click();
  }


  async selectTravelTrip(desiredDestination, language) {

    await this.selectTravelDate();
    await this.selectDestination(desiredDestination, language);
    await this.submitSearchButton.click();
}

}
