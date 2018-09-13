var fromUserHtml = '<div class="row justify-content-end">\
<div class="col-10 chat-element mt-2 text-right">\
                <div class="from-user chat-content d-inline-block">\
                {data}\
            </div>\
</div>\
</div>';
var fromBotHtml = ' <div class="row justify-content-start">\
<div class="col-10 chat-element mt-2 ">\
  <div class="row no-gutters align-items-center">\
      <div class="col-auto mr-1">\
          <img width="40" height="40" class="rounded-circle" src="../static/images/bot.jpg"  />\
        </div>\
      <div class="col" style="word-break:break-word">\
          <div class="from-bot chat-content d-inline-block">\
             {data}\
            </div>\
      </div>\
  </div>\
</div>\
</div>';
var fromBotHtmlWaiting = ' <div class="row justify-content-start" id="loader">\
<div class="col-10 chat-element mt-2 ">\
  <div class="row no-gutters align-items-center">\
      <div class="col-auto mr-1">\
          <img width="40" height="40" class="rounded-circle" src="../static/images/bot.jpg"  />\
        </div>\
      <div class="col" style="word-break:break-word">\
          <div class="from-bot chat-content d-inline-block p-0">\
          <img width="44" height="44" src="../static/images/loader.gif" class="loader-image"/> \
            </div>\
      </div>\
  </div>\
</div>\
</div>';

function sendMessage() {
	$(".optionsRow").html('');
	$(".optionsRow").hide();
	var value = $("#fromUserInput").val();
	adjustHeight(0);
	if (value != '') {
		$("#chat-container").append(fromUserHtml.replace('{data}', value));
		//receiveMessage()
		if (i == 2) {
			receiveMessage("What would you say was the main issue?")
		} else if (i == 3) {
			receiveMessage("How did you feel about our service?")
		} else if (i == 4) {
			receiveMessage("How did you find the décor & ambiance?", "", "rating")
		} else if (i == 5) {
			receiveMessage("How did you hear about us?")
		} else if (i == 6) {
			receiveMessage("Would you like to recommend this to others?")
		} else if (i == 7) {
			receiveMessage("Please rate your overall experience at Sam's Restaurant", "", "rating")
		} else if (i == 8) {
			receiveMessage("Thank you for your feedback. We look forward to serving you again")
		}
	}
}

function receiveMessage(responseHtmlData, inputHtmlData, questionType, options) {
	$("#chat-container").append(fromBotHtmlWaiting);
	if (responseHtmlData == "") {
		reponseHtmlData = makeResponseHtml(questionType);
	}
	if (inputHtmlData == undefined || inputHtmlData == "") {
		inputHtmlData = makeInputHtml(questionType, options);
	}
	setTimeout(function () {
		$("#loader").remove();
		$("#chat-container").append(fromBotHtml.replace('{data}', responseHtmlData));
		$(".optionsRow").append(inputHtmlData);
		if (questionType == "rating") {
			$(".optionsRow").slideDown(200, function () {
				adjustHeight();
				$("#rating").rating(0);
				$('#rating').on('rating:change', function (event, value, caption) {
					$("#fromUserInput").val(value);
					$("#fromUserInput").focus();
				});
			});
		} else {
			$(".optionsRow").slideDown(200, function () {
				adjustHeight();
			});
		}
	}, 1000);
	$("#fromUserInput").val('');
	// var el = new SimpleBar(document.getElementById('chat-row'));
	// $(el.getScrollElement()).animate({ scrollTop: $(el.getScrollElement()).prop("scrollHeight") }, 500);
}

function makeResponseHtml(questionType) {
	return "";
}

function makeInputHtml(questionType, options) {
	var html = "";
	if (questionType == "rating") {
		html = starHTML
	} else if (questionType == "options") {} else if (i == 2) {
		html = optionHTML2;
	} else if (i == 3) {
		html = optionHTML3;
	} else if (i == 5) {
		html = optionHTML5;
	} else if (i == 6) {
		html = optionHTML6;
	}
	i++;
	return html;
}

function adjustHeight(delay) {
	var height = $("#input-row").height() + 40;
	$("#chat-row").css("padding-bottom", height);
	$("html, body").animate({
		scrollTop: $(document).height()
	}, 500);
}
var input = document.getElementById("fromUserInput");
input.addEventListener("keyup", function (event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById("sendButton").click();
	}
});
$(document).on('click', '.valueElement', function () {
	$("#fromUserInput").val($(this).attr('data-value'));
	$("#fromUserInput").focus();
});
// feedback
var countHTML = '<div class="col">\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement" data-value="1">1</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement" data-value="2">2</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement" data-value="3">3</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement" data-value="4">4</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement" data-value="5">5</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement" data-value="6">6</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement" data-value="7">7</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement" data-value="8">8</a>\
</div>';
var optionHTML3 = '<div class="col">\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Average">Average</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Good">Good</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Poor">Poor</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Excellent">Excellent</a>\
</div>';
var optionHTML2 = '<div class="col">\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Food wasn’t as flavourful">Food wasn’t as flavourful</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Food could have been warmer">Food could have been warmer</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Food variety is less">Food variety is less</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Other">Other</a>\
</div>';
var optionHTML6 = '<div class="col">\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Yes">Yes</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="No">No</a>\
</div>';
var optionHTML5 = '<div class="col">\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Social Media">Social Media</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Word of Mouth">Word of Mouth</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Walk ins">Walk ins</a>\
<a href="javascript:void(0)" class="badge badge-pill badge-light custom-badge valueElement"data-value="Other">Other</a>\
</div>';
var starHTML = '<div class="col">\
<input id="rating" name="input-4" class="rating ratingElement" data-show-clear="false" data-show-caption="false">\
</div>'