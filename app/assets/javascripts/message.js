$(function() {
  function buildHTML(message) {
    var img = message.image ? `<img class="contents__image" src=${message.image.url}>` : "";
                    ${message.name}
                  </div>
                  </div>
                 ${img}`
    return html;
  };

  $("#new_message").on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message) {
      var html = buildHTML(message);
      $('.contents').append(html);
      $('.contents').animate( { scrollTop: $('.contents')[0].scrollHeight} );
      $('#new_message')[0].reset();
      $(".footer--flex__submit").removeAttr("disabled");
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
  });
});
