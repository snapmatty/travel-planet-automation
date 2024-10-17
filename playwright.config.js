const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "tests",
  timeout: 60000,
  retries: 2,
  reporter: "html",
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    browserName: "chromium",
  },
  projects: [
    {
      name: "travel-planet.pl",
      use: { baseURL: "https://www.travel-planet.pl" },
    },
    {
      name: "invia.sk",
      use: { baseURL: "https://www.invia.sk" },
    },
    {
      name: "invia.hu",
      use: { baseURL: "https://www.invia.hu" },
    },
    {
      name: "invia.cz",
      use: { baseURL: "https://www.invia.cz" },
      testDir: "tests",
    },
  ],
});
