 /*jshint-esversion6*/

$(document).ready(function() {

  $.get('/api/wordlist', function(response) {
    var wordList = response;
   var score = 0;
   $('.word-div').jQCloud(wordList, {
      autoResize: true,
      colors: ["#9932cc", "#9932cc", "#A33FD0", "#B148D6", "#BD55E1", "#C85EE7"],
      afterCloudRender: function() {
        $('.draggable').draggable({
          stack: ".draggable"
        });
        $( function() {
          $( ".droppable" ).droppable({
            drop: function( event, ui ) {
              $( this )

              .find( "p" );
              var bin = event.target;
              var word = ui.draggable;
          
              var wordId = word[0].classList[1];
              if (wordId === bin.id) {
                score = score +100;
                $('#score').text(score);
                $('#graphic').text("👍").fadeTo(500, 1).fadeTo(1500, 0);
                

              } else {
                score = score -50;
                $('#score').text(score);
                $('#graphic').text("👎").fadeTo(500, 1).fadeTo(1500, 0);
                if (wordId === "js") {
                  $("#js").effect("shake");
                } else if (wordId === "cs") {
                  $("#cs").effect("shake");
                } else if (wordId === "ht") {
                  $("#ht").effect("shake");
                } else if (wordId === "jq") {
                  $("#jq").effect("shake");
                } else if (wordId === "ne") {
                  $("#ne").effect("shake");
                } else if (wordId === "mg") {
                  $("#mg").effect("shake");
                }
              }
            }
          });
        });
      }
    });
  }, 'json');
});


