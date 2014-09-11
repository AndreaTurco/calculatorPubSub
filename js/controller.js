

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
		console.log(value.firstMember + value.secondMember);
		return value.firstMember + value.secondMember;
	};

	$M.addition = init;

})();

(function(){

	if( typeof $M === 'undefined' ) { $M = {}; }

	var init = function ( value ){
		return value.firstMember * value.secondMember;
	};

	$M.multiplication = init;

})();

(function(){

	if( typeof $M === 'undefined' ) { $M = {}; }

	var init = function ( value ){
		return value.firstMember - value.secondMember;
	};

	$M.subtraction = init;

})();

(function(){

	if( typeof $M === 'undefined' ) { $M = {}; }

	var init = function (){
        $('#firstMember').val("");
        $('#secondMember').val("");
        $('#operToDo').val("");
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
        $M.updateValueToShow(resultToShow);
        
        return;
	};

	$M.doOperationShowResult = init;

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
