window.browser = (function() {
  return window.msBrowser || window.browser || window.chrome;
})();

function redirect(requestDetails) {
  return {
    redirectUrl: requestDetails.url.replace("twitter.com", "mobile.twitter.com")
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: ["*://twitter.com/*"], types: ["main_frame"] },
  ["blocking"]
);
