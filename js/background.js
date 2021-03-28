chrome.storage.local.get('copied_text_list', function(items) {
  if (Object.keys(items).length == 0) {
    chrome.storage.local.set({'copied_text_list': []}, function(items) {});
  }
});
