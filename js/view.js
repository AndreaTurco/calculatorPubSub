
//View

var createHTMLbutton = function( type , label, value ){
    var zeroCase = value == '0' ? 'zeroButton' : '';

    return '<button class="button '+zeroCase+'" datatype="'+ type +'" type="text" value="'+ value +'">'+label+'</button>';
};

(function(){

    if( typeof $M === 'undefined' ) { $M = {}; }

    var init = function ( buttonsToRender ){
        var htmlToAppend = "";
        $.each(buttonsToRender, function( type, arr ){
            htmlToAppend += '<section class="'+ type +'Wrapper">';
            $.each(arr, function( k, data ){
                htmlToAppend += createHTMLbutton(type, k, data);
            });
            htmlToAppend += '</section>';
        });

        $('#wrapper').append(htmlToAppend);

        return;
    };

    $M.getHTMLbuttons = init;

})();


