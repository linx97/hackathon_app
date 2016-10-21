/* jshint esversion:6 */
$(document).ready(function() {

  $.get('/api/wordlist', function(response) {
    var wordList = response;

    $('.word-div').jQCloud(wordList, {

      autoResize: true,
      colors: ["#9932cc", "#9932cc", "#A33FD0", "#B148D6", "#BD55E1", "#C85EE7"],
      afterCloudRender: function() {
        $('.draggable').draggable();
        $( function() {
          $( ".droppable" ).droppable({
            drop: function( event, ui ) {
              $( this )

              .find( "p" )
              var bin = event.target;
              var word = ui.draggable;
              var wordId = word[0].classList[1];
              if (wordId === bin.id) {
                alert("You win!");
              } else {
                alert("you loose");
              }
            }
          });
        });
      }
    });
  }, 'json');
});

// ui Object {draggable: jQuery.fn.init[1], helper: jQuery.fn.init[1], position: Object, offset: Object}draggable: jQuery.fn.init[1]0: span#9es1_word_42.draggable.js".w5.ui-draggable.ui-draggable-handlelength: 1__proto__: Object[0]helper: jQuery.fn.init[1]offset: Objectposition: Object__proto__: Object
