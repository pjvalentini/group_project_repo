$(document).ready(function(){
		$.ajax({
			method: 'GET',
			url: '/api/world-holidays'
		}).then(function(results){
			console.log(results.data)
			var newRow, monthTd, dateTd, nationTd, infoTd, linkTd;

			for (var i = 0; i < results.data.length; i++) {
				newRow = $('<tr class="holiday-row" data-holiday-id='+ results.data[i].id +'>')
				monthTd = $('<td class="month" data-holiday-id='+results.data[i].id+'>');
				dateTd = $('<td class="date" data-holiday-id='+results.data[i].id+'>');
				nationTd = $('<td class="nation" data-holiday-id='+results.data[i].id+'>');
				infoTd = $('<td class="info" data-holiday-id='+results.data[i].id+'>');
				linkTd = $('<td class="link" data-holiday-id='+results.data[i].id+'>');
				
			
				monthTd.text(results.data[i].month);
				dateTd.text(results.data[i].day);
				nationTd.text(results.data[i].nation);
				infoTd.text(results.data[i].info);
				linkTd.text(results.data[i].link);

				newRow.append(monthTd).append(dateTd).append(nationTd).append(infoTd).append(linkTd);
				$('#everything-div').append(newRow)
			 }
		});
})