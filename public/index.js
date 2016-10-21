 /*jshint-esversion6*/

$(document).ready(function() {

 $.get('/api/wordlist', function(response) {
   var wordList = response;
   console.log(wordList);

   $('.word-div').jQCloud(wordList, {

     autoResize: true,
     colors: ["#9932cc ", "#9932cc ", "#A33FD0 ", "#B148D6 ", "#BD55E1 ", "#C85EE7 "],
     afterCloudRender: function() {
       $('.draggable').draggable();
       $( function() {
         $( ".droppable" ).droppable({
           drop: function( event, ui ) {
             $( this )
             .addClass( "ui-state-highlight" )
             .find( "p" )
             .html( "Dropped!" );
           }
         });
         $( ".droppable2" ).droppable({
           drop: function( event, ui ) {
             $( this )
             .addClass( "ui-state-highlight" )
             .find( "p" )
             .html( "Dropped!" );
           }
         });
       });
     }
   });
 }, 'json');

});
