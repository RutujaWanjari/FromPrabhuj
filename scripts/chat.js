var fromUserHtml='<div class="row justify-content-end">\
<div class="col-10 chat-element mt-2 text-right">\
                <div class="from-user chat-content d-inline-block">\
                {data}\
            </div>\
</div>\
</div>';
var fromBotHtml=' <div class="row justify-content-start">\
<div class="col-10 chat-element mt-2 ">\
  <div class="row no-gutters align-items-center">\
      <div class="col-auto mr-1">\
          <img width="40" height="40" class="rounded-circle" src="https://cdn.askarvi.com/images/umbrella_inverted.png" />\
        </div>\
      <div class="col" style="word-break:break-word">\
          <div class="from-bot chat-content d-inline-block">\
             {data}\
            </div>\
      </div>\
  </div>\
</div>\
</div>';  
var fromBotHtmlWaiting=' <div class="row justify-content-start" id="loader">\
<div class="col-10 chat-element mt-2 ">\
  <div class="row no-gutters align-items-center">\
      <div class="col-auto mr-1">\
          <img width="40" height="40" class="rounded-circle" src="https://cdn.askarvi.com/images/umbrella_inverted.png" />\
        </div>\
      <div class="col" style="word-break:break-word">\
          <div class="from-bot chat-content d-inline-block p-0">\
          <img width="44" height="44" src="images/loader.gif" class="loader-image"/> \
            </div>\
      </div>\
  </div>\
</div>\
</div>';   

function sendMessage(){
  $(".optionsRow").html('');
  $(".optionsRow").hide(); 
  var value=$("#fromUserInput").val();
var response='Test Response';
if(value!=''){
$("#chat-container").append(fromUserHtml.replace('{data}',value));
$("#chat-container").append(fromBotHtmlWaiting);
setTimeout(function(){ 
   $( "#loader" ).remove();
    $("#chat-container").append(fromBotHtml.replace('{data}',response));    
}, 1000); 

$("#fromUserInput").val('');
$("html, body").animate({ scrollTop: $(document).height() }, 500);
}
}
var input = document.getElementById("fromUserInput");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("sendButton").click();
  }
});



