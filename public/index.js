 /*jshint-esversion6*/

$(document).ready(function() {
 var wordList = [
      {text: "thing", weight: 20, html: {class: "draggable"}},
      {text: "Ipsum", weight: 20, html: {class: "draggable"}},
      {text: "Dolor", weight: 20, html: {class: "draggable"}},
      {text: "Sit", weight: 20, html: {class: "draggable"}},
      {text: "Amet", weight: 20, html: {class: "draggable"}},
      {text: "Lorem", weight: 20, html: {class: "draggable"}},
      {text: "Dolor", weight: 20, html: {class: "draggable"}},
      {text: "Sit", weight: 20, html: {class: "draggable"}},
      {text: "Amet", weight: 20, html: {class: "draggable"}}
   ];

   $('.frame').jQCloud(wordList, {
     shape: 'rectangular',
     autoResize: true,
     afterCloudRender: function() {
       $('.draggable').draggable();
       $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    $( "#droppable2" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
     }

   });


});
