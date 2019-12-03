$(function(){
  function buildHTML(message){
    if (message.image.url) {
      var html = `
                  <div class="contents__log">
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
                  <img class="contents__image" src=${message.image.url}>`
    } else {
      var html = `
                  <div class="contents__log">
                   <div class="contents__log__name">
                    ${message.name}
                   </div>
                   <div class="contents__log__time">
                   ${message.time}
                  </div>
                  </div>
                  <p class="contents__message">
                    ${message.content}
                  </p>`
    };
    return html;
  };
  $("#new_message").on('submit', function(e){
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
    .done(function(message){
      var html = buildHTML(message);
    })
  });
});
