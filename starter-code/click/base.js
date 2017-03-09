console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$('#imperatives span').on('click', function(){
	var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");


	$('ul').append('<li>Clicked:' +$(this).text()+  ' at ' +$('#date').append(now)+  '</li>');

})

})
