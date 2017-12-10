$(document).ready(function(){

	$('#sign-in-form').on('submit', function(e){
		e.preventDefault();

		var signInObj = {
			username: $('#username-input').val(),
			password: $('#password-input').val()
		}

		$.ajax({
			method: 'POST',
			url: '/api/sign-in',
			dataType: 'json',
			data: JSON.stringify(signInObj),
			contentType: 'application/json'
		}).then(function(res){
			window.location.href = '/api/profile/' + res.results[0].id
		});

		$('#name-input').val("");
		$('#username-input').val("");
	});

	$('#calendar').fullCalendar({
		header: {
			left: '',
			center: 'title',
			right: 'today prev, next',
		},
		dayClick: function(date, jsEvent, view) {
    	console.log('Clicked on: ' + date.format());
			console.log('Current view: ' + view.name);
        // change the day's background color just for fun
			$(this).css('background-color:hover', 'red');
			var infoId = $(this).data('id');
			$.ajax({
				method: 'GET', // getting quotes from DB
				url: '/api/calendar',
			}).then(function(info) {
				console.log(info);
			});
		},
	});
});
