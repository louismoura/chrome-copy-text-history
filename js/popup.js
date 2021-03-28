$(function() {
  // strageのコピーテキスト一覧を取得
  chrome.storage.local.get('copied_text_list', function(items) {
    if (Object.keys(items).length == 0) {
      chrome.storage.local.set({'copied_text_list': []}, function() {
        chrome.storage.local.get('copied_text_list', function(init_items) {
          createElemtnts(init_items);
        });
      });
    } else {
      createElemtnts(items);
    }
  });
  // イベント登録(クリックされたらコピー)
  $(document).on("click", "#copied_history ul li", function (e) {
    const temp_textarea_for_copy = $('#temp_textarea_for_copy');
    temp_textarea_for_copy.show();
    temp_textarea_for_copy.val(e.target.innerText);
    temp_textarea_for_copy.select();
    document.execCommand('copy');
    temp_textarea_for_copy.hide();
  });

  function createElemtnts(items) {
    if (items.copied_text_list.length == 0) {
      const html = '<p>コピー履歴がありません</p>'
      $("#copied_history ul").append(html);
    } else {
      for(item of items.copied_text_list) {
        // popup.html内に埋め込む
        const html = '<li class="list-group-item">' + item + '</li>'
        $("#copied_history ul").append(html);
      }  
    }
  }
});
