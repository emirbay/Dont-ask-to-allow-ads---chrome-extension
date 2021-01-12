chrome.webRequest.onBeforeRequest.addListener(
 
    function(details) {
        console.log('In webRequest');
        return {cancel: true};
    }, {
        urls: ["https://*.fundingchoicesmessages.google.com/*",
            "https://*.s.yimg.com/nq/*",
            "https://*.sdk.privacy-center.org/*"]
    }, ["blocking"]
 
  );