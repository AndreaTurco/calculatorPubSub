

var operations = {};
 
$.Operation = function( operToDo ) {
  var callbacks, method,
	operation = operToDo && operations[ operToDo ];
 
  if ( !operation ) {
	callbacks = jQuery.Callbacks();
	operation = {
	  publish: callbacks.fire,
	  subscribe: callbacks.add,
	  unsubscribe: callbacks.remove
	};
	if ( operToDo ) {
	  operations[ operToDo ] = operation;
	}
  }
  return operation;
};

(function(){

	if( typeof $M === 'undefined' ) { $M = {}; }

	var init = function ( value ){
        var result = value.firstMember + value.secondMember;
        $('#result').val(result);
		return result;
	};

	$M.addition = init;

})();

(function(){

	if( typeof $M === 'undefined' ) { $M = {}; }

	var init = function ( value ){
        var result = value.firstMember * value.secondMember;
        $('#result').val(result);
        return result;
	};

	$M.multiplication = init;

})();

(function(){

	if( typeof $M === 'undefined' ) { $M = {}; }

	var init = function ( value ){
        var result = value.firstMember - value.secondMember;
        $('#result').val(result);
        return result;
	};

	$M.subtraction = init;

})();

(function(){

	if( typeof $M === 'undefined' ) { $M = {}; }

	var init = function (){
        $('#firstMember').val("");
        $('#secondMember').val("");
        $('#operToDo').val("");
        $('#result').val("");
		return;
	};

	$M.resetAll = init;

})();

(function(){

	if( typeof $M === 'undefined' ) { $M = {}; }

	var init = function (){
        var operValue = {
                firstMember : parseFloat($('#firstMember').val()),
                secondMember : parseFloat($('#secondMember').val())
            },
            operToDo = $('#operToDo').val();

        // Publisher
        var resultToShow = $.Operation( operToDo ).publish( operValue );

        return;
	};

	$M.doOperationShowResult = init;

})();

(function(){

	if( typeof $M === 'undefined' ) { $M = {}; }

	var init = function (lastPressedButton){
        var $firstMember = $('#firstMember'),
            $secondMember = $('#secondMember'),
            $numberShowed = $('#numberShowed'),
            $partial = $('#partial'),
            $result = $('#result'),
            $operToDo = $('#operToDo'),
            $this = $(lastPressedButton),
            temp = '';

        switch( $this.attr('datatype') ){
            case 'numbers':
                if($result.val() == '') {
                    if( $operToDo.val() == '' ){
                        //crete the first number
                        temp = $firstMember.val() + $this.val();
                        $firstMember.val( temp );
                    }
                    else{
                        //create second number
                        temp = $secondMember.val() + $this.val();
                        $secondMember.val(temp);
                    }
                }else {
                    //restart the cicle
                    if( $operToDo.val() == 'doOperation' ){
                        $.Operation( "cancOper" ).publish();
                        temp = $this.val();
                        $firstMember.val( temp );
                    } else {
                        temp = $secondMember.val() + $this.val();
                        $secondMember.val(temp);
                        $result.val('');
                    }
                }
                break;
            case 'logicalOper' :
                if($result.val() == '') {
                    if( $secondMember.val() == '' ) {
                        temp = $this.html();
                        $operToDo.val($this.val());
                    } else {
                        $.Operation( 'doOperation' ).publish();
                        temp = $this.html();
                        $firstMember.val( $result.val() );
                        $operToDo.val($this.val());
                        $secondMember.val('');
                    }
                } else {
                    if( $operToDo.val() == 'doOperation' ) {
                        $secondMember.val('');
                    }
                    temp = $this.html();
                    $firstMember.val( $result.val() );
                    $operToDo.val($this.val());
                }
                break;

            case 'cancel':
                $.Operation( "cancOper" ).publish();
                temp = '0';
                break;

            case 'result':
                if($result.val() == '') {
                    if( $secondMember.val() == '' ){
                        temp =  $firstMember.val();
                    } else {
                        $.Operation( 'doOperation' ).publish();
                        temp = $result.val();
//                        $firstMember.val( temp );
                    }
                } else {
                    $.Operation( 'doOperation' ).publish();
                    temp = $result.val();
                    $secondMember.val('');
//                    $firstMember.val( temp );
                }
                $operToDo.val('doOperation');
                break;

        }
        $numberShowed.val(temp)
        return;
	};

	$M.updateValueToShow = init;

})();



/*******************************************
// Subscribers
$.Topic( "mailArrived" ).subscribe( fn1 );
$.Topic( "mailArrived" ).subscribe( fn2 );
$.Topic( "mailSent" ).subscribe( fn1 );
 
// Publisher
$.Topic( "mailArrived" ).publish( "hello world!" );
$.Topic( "mailSent" ).publish( "woo! mail!" );
 
// Here, "hello world!" gets pushed to fn1 and fn2
// when the "mailArrived" notification is published
// with "woo! mail!" also being pushed to fn1 when
// the "mailSent" notification is published.
 
output:
hello world!
fn2 says: hello world!
woo! mail!
********************************/
// BookCollection.prototype.addBook = function (book) {
// 	this.books.push(book);
// 	$.publish('book-added', book);
// 	return book;
// };

// BookCollection.prototype.removeBook = function (book) {
//    var removed;
//    if (typeof book === 'number') {
// 	   removed = this.books.splice(book, 1);
//    }
//    for (var i = 0; i < this.books.length; i += 1) {
// 	  if (this.books[i] === book) {
// 		  removed = this.books.splice(i, 1);
// 	  }
//    }
//    $.publish('book-removed', removed);
//    return removed;
// };
