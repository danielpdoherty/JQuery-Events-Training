console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  // $('.#total').on('click', function(){
  // 	var left = $('#left').val();
  // 	var right = $('#right').val();
+  
$('#total').on('click',function(){
 +  var left = parseInt($('#left').val());
 +  var right = parseInt($('#right').val());
 +   
 	var total = left + right;
 +    

 	$('#total').val(total);

// })
