import { test, expect } from "../helpers/fixtures";
import { newUser } from "../helpers/test.data";

test.beforeEach(async ({ homePage }) => {
  await homePage.goto();
  await homePage.handleCookiesPopUp();
  await homePage.handleNotifiationPopUp();
});

test.describe("Destination and date selection", () => {
  test("should allow user to serach selected destination and date", async ({
    homePage,
    loginModal,
  }) => {
//     await test.step("when the user selects destination", async () => {
//       await homePage.pageElements.destinationPicker.click();
//       await homePage.pageElements.destinationPicker.selectOption(testData.desiredDestination);
//     });
//     await test.step("and fills out all the required fields", async () => {
//       await loginModal.emailInput.fill(newUser.email);
//       await loginModal.passwordInput.fill(newUser.password);
//     });
//     await test.step("and submits the form", async () => {
//       await loginModal.submitButton.click();
//     });
//     await test.step("then the user is not logged in and the error message is displayed", async () => {
//       await expect(loginModal.errorMessage).toBeVisible();
//     });
//   });
// });


// to fix: Apply path for selected destination and date;
// figure out how to apply assertion for destination between HomePage and SearchedResultsPage
// test on multiple domains if this approach works at all 
// check if after loading the results are shown or not on the SearchedResultsPage