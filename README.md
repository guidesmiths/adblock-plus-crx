# Adblock-Plus.crx

Adverts can slow and even break functional tests. If you run your functional tests using ChromeDriver you can install extensions like AdBlock-Plus as follows...

```
{
  ...
  "desiredCapabilities": {
    "javascriptEnabled": true,
    "acceptSslCerts": true,
    "browserName": "chrome",
    "chromeOptions": {
      "args": [ "no-sandbox" ],
      "extensions": [ "Q3Iy....AAAA=" ]
    }
  }
  ...
}
```

Where ```Q3Iy....AAAA=``` is the base64 encoded crx file you want to install. Unfortunately Adblock-Plus is around 600KB when encoded and not something you really want to include in a json file.

When using the excellent [Nightwatch.js](http://nightwatchjs.org/) you can define configuration in ```nightwatch.conf.js``` instead of json.

```
var adBlockPlus = require('adblock-plus-crx')

module.exports = {
  ...
  "desiredCapabilities": {
    "javascriptEnabled": true,
    "acceptSslCerts": true,
    "browserName": "chrome",
    "chromeOptions": {
      "args": [ "no-sandbox" ],
      "extensions": [ adBlockPlus.base64() ]
    }
  }
  ...
}

# Modifications

AdBlock-Plus opens a new tab on first run. WebDriver tests typically start with a fresh profile for each run so we've disabled first run behaviour by setting suppress_first_run_page to true.


