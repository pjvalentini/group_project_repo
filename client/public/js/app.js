/* global $ */
$(document).ready(function() {
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
