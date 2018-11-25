function main() {
    var webdriver = require('selenium-webdriver');

    // var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();


var driver = new webdriver.Builder().
  withCapabilities({
    'browserName': 'chrome',
    'platform': 'Windows 10',
    'version': '59.0',
    'username': process.env.SAUCE_USER,
    'accessKey': process.env.SAUCE_LICEANSE
  }).
  usingServer("http://" + process.env.SAUCE_USER + ":" + process.env.SAUCE_LICEANSE +
              "@ondemand.saucelabs.com:80/wd/hub").
  build();

    // Initialize the eyes SDK and set your private API key.
    var Eyes = require('eyes.selenium').Eyes;
    var eyes = new Eyes();


    try {

        // Start the test and set the browser's viewport size to 800x600.
        eyes.open(driver, 'Applitools website', 'TestResults', {width: 800, height: 600});

        // Navigate the browser to the "hello world!" web-site.
        driver.get('https://yahoo.com/');

        // Visual checkpoint #1.
        eyes.checkWindow('Main Page');

        // End the test.
        eyes.close(false).then(function(results) {console.log(results);});
        


        

    } finally {

      // If the test was aborted before eyes.close was called ends the test as aborted.
      eyes.abortIfNotClosed();

  }

}

main();
