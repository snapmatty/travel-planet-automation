import { test, expect } from "../helpers/fixtures";
import { desiredDestination, newUser } from "../helpers/test.data";

test.beforeEach(async ({ homePage }) => {
  await homePage.goto();
  await homePage.handleCookiesPopUp();
  await homePage.handleNotifiationPopUp();
});

test.describe("Offer selection", () => {
  test("should select offer on second page of search results", async ({
    homePage,
    offerSelectionPage,
    resultsPage,
    reservationPage,
  }) => {
    //additional testData
    const projectName = (await test.info()).project.name;
    const targetLang = {
      "travel-planet.pl": "pl",
      "invia.sk": "sk",
      "invia.hu": "hu",
      "invia.cz": "cz",
    }[projectName];

    await test.step("when the user selects travel trip information", async () => {
      await homePage.selectTravelTrip(desiredDestination, targetLang);
    });
    await test.step("and the user navigates to the second page of search results", async () => {
      await offerSelectionPage.clickPaginationButton(2); //user passes the number of which page is clicked in the pagination menu on the bottom of the page
      await expect(offerSelectionPage.page.url()).toContain("page=2");
    });
    await test.step("and user selects the first offer", async () => {
      await offerSelectionPage.firstSearchResult.click();
    });
    await test.step("then the user fills the reservation form and confirms the selection by clicking on the offer box", async () => {
      if (projectName === "travel-planet.pl") {
        await resultsPage.emailInput.fill(newUser.email);
        await resultsPage.phoneNumberInput.fill(newUser.phoneNumber);
        await resultsPage.consentCheckbox.check();
      }
      if (projectName === "invia.hu") {
        await resultsPage.emailInput.fill(newUser.email);
        await resultsPage.phoneNumberInput.fill(newUser.phoneNumber);
      }
      await resultsPage.submitButton.click();
    });
    await test.step("and user is redirected to reservation page", async () => {
      await reservationPage.finalPrice.isVisible();
    });
  });
});
