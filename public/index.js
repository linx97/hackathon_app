/* jshint esversion:6 */
$(document).ready(function() {
  var wordList = [
       {text: "thing", weight: 10, html: {class: "draggable"}},
       {text: "Ipsum", weight: 9, html: {class: "draggable"}},
       {text: "Dolor", weight: 10, html: {class: "draggable"}},
       {text: "Sit", weight: 9, html: {class: "draggable"}},
       {text: "Amet", weight: 10, html: {class: "draggable"}},
       {text: "Lorem", weight: 10, html: {class: "draggable"}},
       {text: "Ipsum", weight: 9, html: {class: "draggable"}},
       {text: "Dolor", weight: 10, html: {class: "draggable"}},
       {text: "Sit", weight: 9, html: {class: "draggable"}},
       {text: "Amet", weight: 10, html: {class: "draggable"}}
    ];

    $('.frame').jQCloud(wordList, {
      autoResize: true,
      afterCloudRender: function() {
        $('.draggable').draggable();
      }
    });

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




});

