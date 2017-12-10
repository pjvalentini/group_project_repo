$(document).ready(function(){

	$('#sign-up-form').on('submit', function(e){
		e.preventDefault();

		var signUpObj = {
			lastname: $('#lastname-input').val(),
			firstname: $('#firstname-input').val(),
			username: $('#username-input').val(),
			email: $('#email-input').val(),
			password: $('#password-input').val()
		}

		$.ajax({
			method: 'POST',
			url: '/api/sign-up',
			dataType: 'json',
			data: JSON.stringify(signUpObj),
			contentType: 'application/json'
		}).then(function(res){
			window.location.href = '../sign-in.html'
		});

		// $('#name-input').val("");
		// $('#username-input').val("");
	});

});