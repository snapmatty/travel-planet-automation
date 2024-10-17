import { test, expect } from "../helpers/fixtures";

test.beforeEach(async ({ homePage }) => {
  await homePage.goto();
  await homePage.handleCookiesPopUp();
  await homePage.handleNotifiationPopUp();
});

test.describe("Basic functionalities", () => {
  test("should navigate to the home page and verify presence of elements", async ({
    homePage,
  }) => {
    await test.step("when the homepage loads", async () => {
      await homePage.page.waitForLoadState("load");
    });
    await test.step("then destination element is visible", async () => {
      await expect(homePage.pageElements.destinationPicker).toBeVisible();
    });
    await test.step("and date element is visible", async () => {
      await expect(homePage.pageElements.datePicker).toBeVisible();
    });
    await test.step("and transportation element is visible", async () => {
      await expect(homePage.pageElements.transportationPicker).toBeVisible();
    });
    await test.step("and passenger selectors elements are visible", async () => {
      await expect(homePage.pageElements.adultPassengerSelector).toBeVisible();
      await expect(homePage.pageElements.childPassengerSelector).toBeVisible();
    });
    await test.step("and login button is visible", async () => {
      await expect(homePage.pageElements.loginModalButton).toBeVisible();
    });
    await test.step("and submit search button is visible", async () => {
      await expect(homePage.pageElements.submitSearchButton).toBeVisible();
    });
  });
});
