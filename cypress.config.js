const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1400,
  video: false,
  screenshotsFolder: 'cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,
  chromeWebSecurity: false,
  e2e: {
    specPattern: 'test/**/*.spec.js',
    baseUrl: 'https://jetbrains.com',
  },
})
