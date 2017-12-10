/* global $ */
$(document).ready(function() {
	$('#calendar').fullCalendar({
		header: {
			left: '',
			center: 'title',
			right: 'today prev, next',
		},
	});
});
