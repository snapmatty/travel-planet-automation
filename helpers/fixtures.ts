import { test as base } from "@playwright/test";
import { HomePage } from "../page-objects/home-page";
import { BasePage } from "../page-objects/base-page";
import { LoginModal } from "../page-objects/modals/login-modal";
import { ResultsPage } from "../page-objects/results-page";
type MyFixtures = {
  homePage: HomePage;
  basePage: BasePage;
  loginModal: LoginModal;
  resultsPage: ResultsPage;
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

  resultsPage: async ({ page }, use) => {
    const resultsPage = new ResultsPage(page);
    await use(resultsPage);
  },
});

export { expect } from "@playwright/test";
