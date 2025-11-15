/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: "./tests",
  reporter: [["html", { open: "never" }]],
  use: {
    headless: true,
    video: "on",
    screenshot: "on",
    trace: "on"
  }
};

module.exports = config;
