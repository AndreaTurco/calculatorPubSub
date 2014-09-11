
//View

var createHTMLbutton = (function( type , data ){
    return '<input class="button"'/
        ' datatype="'+ type +'" type="text" value="'+ data.value +'">'/
            +data.label+'/' +
        '</input>';
})();

(function(){

    if( typeof $M === 'undefined' ) { $M = {}; }

    var init = function ( buttonsToRender ){
        var htmlToAppend = "";
        $.forEach(buttonsToRender, function( type, data ){
            htmlToAppend += createHTMLbutton(type, data);
        });
        return htmlToAppend;
    };

    $M.getHTMLbuttons = init;

})();

