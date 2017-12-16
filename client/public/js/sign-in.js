/* global $*/

$(document).ready(function() {
	$('#sign-in-form').on('submit', function(e) {
		e.preventDefault();
		var signInObj = {
			username: $('#sign-in-username-input').val(),
			password: $('#sign-in-password-input').val(),
		};
		$.ajax({
			method: 'POST',
			url: '/api/sign-in',
			dataType: 'json',
			data: JSON.stringify(signInObj),
			contentType: 'application/json',
		}).then(function(res) {
			console.log(res);
			window.location.href = '/world-holidays?id=' + res.results[0].id;
		});
	});
});
