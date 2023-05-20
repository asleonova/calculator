exports.config = {
    runner: 'local',
    specs: [
      'dist/**/*.scenario.js'
    ],
    capabilities: [{
      browserName: 'chrome'
    }],
    logLevel: 'error',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://localhost:8080/src', // Update with your app's URL
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['wdio-chromedriver-service'],
    framework: 'jasmine',
    jasmineOpts: {
      defaultTimeoutInterval: 60000,
      expectationResultHandler: function(passed, assertion) {
        // Custom expectation result handler
      }
    }
  }