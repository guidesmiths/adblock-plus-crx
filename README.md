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
```
# Modifications
AdBlock-Plus opens a new tab on first run and since WebDriver tests typically start with a fresh profile each run gets more than a little annoying.  We've disabled first run behaviour by setting ```suppress_first_run_page``` to true and recreating the crx.

# How do make your own crx (instructions for OSX)
1. Use a clean directory
    
    ```
mkdir ~/Downloads/adblockplus
cd ~/Downloads/adblockplus
```
1. Download the crx file from adblockplus.org 
    
    ```bash
curl https://downloads.adblockplus.org/adblockpluschrome-1.12.4.crx -O Adblock-Plus_v1.12.4.crx
```
1. Unzip the crx
    
    ```
unzip Adblock-Plus_v1.12.4.crx
```
1. Make your modifications

    ```
sed -i '' -e 's/defaults.suppress_first_run_page = false;/defaults.suppress_first_run_page = true;/ lib/adblockplus.js 
```
1. Update the crx
    
    ```
zip Adblock-Plus_v1.12.4.crx . -r -u
```
1. Base64 encode the zip
    
    ```
base64 --in Adblock-Plus_v1.12.4.crx --out Adblock-Plus_v1.12.4.crx
```
