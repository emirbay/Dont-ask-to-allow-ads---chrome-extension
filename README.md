# Dont ask to allow ads please! - chrome extension

Simple extension for Google Chrome will automatically close modal that asks you to allow ads or disable ad-block extensions

## Installation

To install developer version, type this address to open Chrome Extensions:

```bash
chrome://extensions
```
Enable "Developer mode" and click "Load unpacked" extension or drag the folder with extension (dont_ask_for_ads)  onto the page to load the extension. The new extension will be displayed on the page.

## Description

Extension works with any modal displayed after page is loaded. There should be "Close button" with class "fc-close".
didomi.io GDPR modals will be hidden

Extension also hide Yahoo Mail popup forcing you to disable ad-block or wait for 15 seconds to let you see emails.

<img src="/dont_ask_for_ads/mail_yahoo_adblock.png" width="300" height="300">


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNU](https://github.com/emirbay/Dont-ask-to-allow-ads---chrome-extension/blob/main/LICENSE)