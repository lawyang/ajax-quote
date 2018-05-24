$( document ).ready( readyNow );
console.log('JS');

function readyNow(){
    console.log('JQ');
    getQuotesFromServer();
    $('#refreshButton').on('click', getQuotesFromServer );
    $('#newButton').on('click', addQuote)
}// READYNOW

// function displayQuote( quote ) {
//     let displayOut = $('#quoteOut');
//     displayOut.empty();
//     for (quote of quotes){
//         displayOut.append( '<li>' + quote + '</li>' )
//     } //end for
// }

function getQuotesFromServer() {
    console.log('in getQuotesFromServer');
    // hey jQuery make a ajax method of GET to the URL /quotes
    // make AJAX GET call to retrieve quotes from server
    $.ajax({
        method: 'GET',
        url: '/quotes',
    }).then( function( response ){
        console.log( 'back from server with:', response );
        display( response );
    }); // end ajax
} // end getQuotesFromServer

function display( quotes ) {
    let el = $('#quoteOut');
    el.empty();
    for (words of quotes){
        el.append( '<li> "' + words + '" </li>' );
    }
} // end display

function addQuote() {
    console.log('in addQuote');
    let objectToSend ={
        quote: $('#quoteBody').val(),
        author: $('#author').val(),
    };
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: objectToSend,
    }).then( function( response ){
        console.log( 'back from server with:', response);
        getQuotesFromServer();
    })
}