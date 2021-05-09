//protractor.conf.js
exports.config = {
    directConnect : true,
    // getPageTimeout: 60000,
    // allScriptsTimeout: 60000,
    framework: 'custom', // set to "custom" instead of cucumber.
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome',
        chromeOptions: {
            args: [ "--disable-gpu", "--window-size=800,600" ]
        }
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      'features/*.feature'
    ],
  
    cucumberOpts: {
      require: 'steps/stepDefinition.js',
      tags: false,
      // format: ['pretty'],
      profile: false,
      'no-source': true
    },
    onPrepare: function () {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
  };