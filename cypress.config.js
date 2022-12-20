const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "a32rz5",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
