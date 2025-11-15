const { test, expect } = require("@playwright/test");

test("Open example.com and check title", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle(/Google/);
});
