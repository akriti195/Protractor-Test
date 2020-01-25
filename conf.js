// Require protractor-jasmine2-screenshot-reporter to generate reports.
//var retry = require('protractor-retry').retry;
var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
// Provide destination and filename where protractor-reports will be stored.
var reporter = new HtmlReporter({
    dest: 'protractor-actiTime',
    filename: 'protractor-actiTime.html'
});
// Connecting directing to the conf file
"use strict";
exports.config = {
    getPageTimeout: 120000,
    jasmineNodeOpts: {defaultTimeoutInterval: 100000},
    allScriptsTimeout: 50000,
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
     /* multiCapabilities: [{
          browserName: 'firefox'
      }, {
          browserName: 'chrome'
      }],*/
   capabilities: {
        'browserName': 'chrome',
        // chromeOptions: {
        //     args: [ "--headless", "--disable-gpu", "--window-size=1600,900" ]}
    },
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',
    // Spec patterns are relative to the current working directory when protractor is called.

     // specs: ['./specs/**/TestDataHubLogin.js','./specs/**/TestDataHubAllMenu.js'],
    specs: ['./specs/**/TestLoginPage.js'],
      // Options to be passed to Jasmine.

    //Before launch function to run initial configurations before start running the test
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    // on initial environment is set where reports are added.
    onCleanUp: function (results) {
        //retry.onCleanUp(results);
    },
    onPrepare: function () {
        //retry.onPrepare();
        jasmine.getEnv().addReporter(reporter);
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;
        },
    afterLaunch: function() {
    //return retry.afterLaunch(2);
    // }
    // Timeout can be adjusted according to your suitability by default it's 10 seconds.
    // allScriptsTimeout: 50000,

}};