$(function() {
  function buildHTML(message) {
    var img = message.image.url ? `<img class="contents__image" src=${message.image.url}>` : "";
    var html  = `<div class="contents__log">
                  <div class="contents__log__name">
                    ${message.name}
                  </div>
                  <div class="contents__log__time">
                    ${message.time}
                  </div>
                 </div>
                 <p class="contents__message">
                  ${message.content}
                 </p>
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
    var reloadMessages = function() {
    var last_message_id = $('.contents__content:last').data('message-id');
    var url = location.href.replace('http://localhost:3000','').replace('/messages', '/api/messages');

      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        var insertHTML = '';
      })
    };
});
