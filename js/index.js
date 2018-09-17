// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();
$(function () {
	$('#loginModal').modal({
		backdrop: 'static',
		keyboard: false
	});
	$("#loginModal").modal('show');
	$("#code").on("submit", function (event) {
		if ($("#codeSubmit").val() == "520sJltFVh0JNCN+VXqDRf93D2j578EmhBIVXEFG/AQ=") {
			$("#loginModal").modal('hide');
		}
		event.preventDefault();
		event.stopPropagation();
	});

	$('#train-form').submit(function(e) {
		e.preventDefault();
		var formData = new FormData($('#train-form')[0]);

		$.ajax({
			type: 'POST',
			url: '/v1/train',
			data: formData,
			contentType: false,
			processData: false
		}).done(function(data, textStatus, jqXHR) {
			var d = JSON.parse(data);
			if(d.status === 'true') {
				$('#train-que-txt').val('');
				$('#train-ans-txt').val('');
				swal("Good job!", "Training is done!", "success");
			}
			else {
				swal("Oooops!", "Training is unsuccessful!", "error");
			}

		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log("Training failed");
			swal("Oooops!", "Training is unsuccessful!", "error");
		});
	});

	$('#evaluate-form').submit(function(e) {
		e.preventDefault();
		var formData = new FormData($('#evaluate-form')[0]);

		$.ajax({
			type: 'POST',
			url: '/v1/evaluate',
			data: formData,
			contentType: false,
			processData: false
		}).done(function(data, textStatus, jqXHR) {
			var d = JSON.parse(data);
			if(d.status === 'true'){
				$('#eval-ans-txt').text(d.ans);
				$('#score-tag').show();
				$('#score').text(d.score);
				console.log('Evaluation success');
			}
			else{
				$('#eval-ans-txt').text('Sorry, I could not understand.');
				console.log(d.ans);
			}
		}).fail(function(jqXHR, textStatus, errorThrown) {
			$('#eval-ans-txt').text('Sorry, I could not understand.');
			console.log(d.ans);
		});
	});

    
});