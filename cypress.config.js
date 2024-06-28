const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      "url": "https://parabank.parasoft.com/parabank/index.htm",
    },
  },
});
