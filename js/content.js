$(document).bind('copy', function(e){
  var copied = window.getSelection().toString();;
  chrome.storage.local.get('copied_text_list', function(items) {
    let new_history = items.copied_text_list.filter(text => {
      if (text != copied) return true;
    });
    new_history.unshift(copied);
    chrome.storage.local.set({'copied_text_list': new_history}, function(items) {});
  });
});
