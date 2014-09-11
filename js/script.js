$(document).ready(function(){

	$.Topic( "addOper" ).subscribe( $M.addition );
	$.Topic( "subOper" ).subscribe( $M.subtraction );
	$.Topic( "moltOper" ).subscribe( $M.multiplication );


	$('#doOperation').on('click', function(){
		// Publisher
		$.Topic( operToDo ).publish( operValue );
	});

});