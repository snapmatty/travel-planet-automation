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
    resultsPage,
  }) => {
    await test.step("when the user selects travel trip information", async () => {
      const projectName = (await test.info()).project.name;
      const targetLang = {
        "travel-planet.pl": "pl",
        "invia.sk": "sk",
        "invia.hu": "hu",
        "invia.cz": "cz",
      }[projectName];
      await homePage.selectTravelTrip(desiredDestination, targetLang);
    });
    await test.step("and the user navigates to the second page of search results", async () => {
      await resultsPage.clickPaginationButton(2); //user passes the number of which page is clicked in the pagination menu on the bottom of the page
      await expect(resultsPage.page.url()).toContain("page=2");
    });
    await test.step("and user selects the first offer", async () => {
      //await resultsPage.
    });
    await test.step("then the user confirms the selection by clicking on the offer box", async () => {
      //tbd
    });
  });
});
// Navigate to the second page of search results.
// • Select any offer.
// • Confirm the selection by clicking on the offer box.