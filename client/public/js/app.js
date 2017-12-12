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
			console.log(res)
			//window.location.href = '/api/profile/' + res.results[0].id
		});

		$('#username-input').val("");
		$('#password-input').val("");
	});

	$.ajax({
		method: 'GET',
		url: 'api/world-holidays/'
	}).then(function(results){
		var newRow, monthTd, dateTd, nationTd, infoTd, linkTd
		for(var i = 0; i < results.rows.length; i++){
			rewRow = $('<tr class="holiday-row" data-holiday-id='+ results.rows[i].id +'>')
			monthTd = $('<td>');
			dateTd = $('<td>');
			nationTd = $('<td>');
			infoTd = $('<td>');
			linkTd = $('<td>');

			monthTd.text(results.rows[i].month);
			dateTd.text(results.rows[i].day);
			nationTd.text(results.rows[i].nation);
			infoTd.text(results.rows[i].info);
			linkTd.text(results.rows[i].link);

			newRow.append(monthTd).append(dateTd).append(nationTd).append(infoTd).append(linkTd);
			$('#everything-div').append(newRow)
		}
	})
	$(document).on('click', '.holiday-row', function(){
		var holiday = this.data('holiday-id');
		$('#holiday-modal').modal();

		$.ajax({
			method: 'GET',
			url: 'api/world-holidays'
		}).then(function(info){
			for( i=0; i< info.rows.length; i++){
				if(info.rows[i].id===holiday){
					console.log(info.rows[i].info)
					console.log(info.rows[i].link)
				}
			}
		})

	})

});