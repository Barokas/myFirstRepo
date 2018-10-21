function main() {
    var webdriver = require('selenium-webdriver');

    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

    // Initialize the eyes SDK and set your private API key.
    var Eyes = require('eyes.selenium').Eyes;
    var eyes = new Eyes();
    eyes.setApiKey("ltY8nZLL7WH10809aiet3jzzD105rHyX110wrppAhBAUmnoFk110");


    try {

        // Start the test and set the browser's viewport size to 800x600.
        eyes.open(driver, 'Applitools website', 'TestResults', {width: 1200, height: 817});

        // Navigate the browser to the "hello world!" web-site.
        driver.get('https://applitools.com/');

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