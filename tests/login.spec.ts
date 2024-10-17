import { test, expect } from "../helpers/fixtures";
import { newUser } from "../helpers/test.data";

test.beforeEach(async ({ homePage }) => {
  await homePage.goto();
  await homePage.handleCookiesPopUp();
  await homePage.handleNotifiationPopUp();
});

test.describe("Login", () => {
  test("should not login user with invalid credentials", async ({
    homePage,
    loginModal,
  }) => {
    await test.step("when the user clicks the login button in header", async () => {
      await homePage.pageElements.loginModalButton.click();
    });
    await test.step("and fills out all the required fields", async () => {
      await loginModal.emailInput.fill(newUser.email);
      await loginModal.passwordInput.fill(newUser.password);
    });
    await test.step("and submits the form", async () => {
      await loginModal.submitButton.click();
    });
    await test.step("then the user is not logged in and the error message is displayed", async () => {
      await expect(loginModal.errorMessage).toBeVisible();
    });
  });
});
