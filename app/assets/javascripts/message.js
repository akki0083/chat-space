$(function() {
  function buildHTML(message) {
    var img = message.image.url ? `<img class="contents__content__image" src=${message.image.url}>` : "";
    var html  = `
                <div class="contents__content" data-message-id="${message.id}">
                  <div class="contents__content__log">
                    <div class="contents__content__log__name">
                      ${message.name}
                    </div>
                    <div class="contents__content__log__time">
                      ${message.time}
                    </div>
                  </div>
                  <p class="contents__content__message">
                    ${message.content}
                  </p>
                  ${img}
                </div>
                `
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
    });
  });

  if(location.href.match(/groups.+messages/)){
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

        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });

        $('.contents').append(insertHTML);
        var new_last_message_id = $('.contents__content:last').data('message-id');

        if(last_message_id < new_last_message_id){
          $('.contents').animate( { scrollTop: $('.contents')[0].scrollHeight} );
        };
      })
      .fail(function() {
        alert('自動更新に失敗しました');
      });
    };
  };
  setInterval(reloadMessages, 7000);
});
