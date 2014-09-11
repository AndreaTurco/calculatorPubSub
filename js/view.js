
//View
var BookListView = (function () {

   function removeBook(book) {
      $('#' + book.isbn).remove();
   }

   function addBook(book) {
      $('#bookList').append('<div id="' + book.isbn + '">' + book.name + '</div>');
   }

   return {
      init: function () {
         $.subscribe('book-removed', function (book) {
             removeBook(book);
         });
         $.subscribe('book-aded', function (book) {
             addBook(book);
         });
      }
   }
}());