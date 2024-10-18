import { test as base } from "@playwright/test";
import { HomePage } from "../page-objects/home-page";
import { BasePage } from "../page-objects/base-page";
import { LoginModal } from "../page-objects/modals/login-modal";
import { ResultsPage } from "../page-objects/results-page";
import { OfferSelectionPage } from "../page-objects/offer-page";
import { ReservationPage } from "../page-objects/reservation-page";
type MyFixtures = {
  homePage: HomePage;
  basePage: BasePage;
  loginModal: LoginModal;
  resultsPage: ResultsPage;
  offerSelectionPage: OfferSelectionPage;
  reservationPage: ReservationPage;
};

export const test = base.extend<MyFixtures>({
  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  loginModal: async ({ page }, use) => {
    const homePage = new LoginModal(page);
    await use(homePage);
  },

  offerSelectionPage: async ({ page }, use) => {
    const offerSelectionPage = new OfferSelectionPage(page);
    await use(offerSelectionPage);
  },

  resultsPage: async ({ page }, use) => {
    const resultsPage = new ResultsPage(page);
    await use(resultsPage);
  },

  reservationPage: async ({ page }, use) => {
    const reservationPage = new ReservationPage(page);
    await use(reservationPage);
  },
});

export { expect } from "@playwright/test";
