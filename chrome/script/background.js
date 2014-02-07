chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {
    file: 'script/lib/jquery.min.js'
  }, function() {
      chrome.tabs.executeScript(tab.id, {file: 'script/fill-pr.js'});
  });
});
