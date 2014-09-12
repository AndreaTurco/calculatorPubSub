$(document).ready(function(){

    $M.getHTMLbuttons(buttonsToRender);

	$.Operation( "addOper" ).subscribe( $M.addition );
	$.Operation( "subOper" ).subscribe( $M.subtraction );
	$.Operation( "moltOper" ).subscribe( $M.multiplication );
	$.Operation( "cancOper" ).subscribe( $M.resetAll );
	$.Operation( "doOperation" ).subscribe( $M.doOperationShowResult );

	$('.button').on('click', function(){
        $M.updateValueToShow(this);
	});

});