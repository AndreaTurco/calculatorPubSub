$(document).ready(function(){

    $M.getHTMLbuttons(buttonsToRender);

	$.Operation( "addOper" ).subscribe( $M.addition );
	$.Operation( "subOper" ).subscribe( $M.subtraction );
	$.Operation( "moltOper" ).subscribe( $M.multiplication );
	$.Operation( "cancOper" ).subscribe( $M.resetAll );
	$.Operation( "doOperation" ).subscribe( $M.doOperationShowResult );


//	$('#doOperation').on('click', function(){
//		var operValue = {
//            firstMember : parseFloat($('#firstMember').val()),
//            secondMember : parseFloat($('#secondMember').val())
//            },
//            operToDo = $('#operToDo').val();
//
//		// Publisher
//		$.Operation( operToDo ).publish( operValue );
//	});

});