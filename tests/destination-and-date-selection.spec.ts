import { desiredDestination } from "../helpers/test.data";
import { test, expect } from "../helpers/fixtures";

test.beforeEach(async ({ homePage }) => {
  await homePage.goto();
  await homePage.handleCookiesPopUp();
  await homePage.handleNotifiationPopUp();
});

test.describe("Destination and date selection", () => {
  test("should allow user to serach selected destination and date", async ({
    homePage,
    offerSelectionPage,
  }) => {
    await test.step("when the user selects destination", async () => {
      const projectName = (await test.info()).project.name;
      const targetLang = {
        "travel-planet.pl": "pl",
        "invia.sk": "sk",
        "invia.hu": "hu",
        "invia.cz": "cz",
      }[projectName];
      //using targetLang from project metadata to apply different translations per project/domain; this can be improved but it is a proof of concept
      await homePage.selectDestination(desiredDestination, targetLang);
    });
    await test.step("and fills travel date information", async () => {
      await homePage.selectTravelDate();
    });
    await test.step("and submits the form information", async () => {
      await homePage.submitSearchButton.click();
    });
    await test.step("then the user is taken to results page", async () => {
      await expect(offerSelectionPage.destinationPicker).toBeVisible();
    });
  });
});
