 /*jshint-esversion6*/

$(document).ready(function() {

  $.get('/api/wordlist2', function(response) {
    var wordList = response;
    var score = 0;
   $('.word-div').jQCloud(wordList, {
      autoResize: true,
      colors: ["#6199B1"],
      afterCloudRender: function() {
        $('.draggable').draggable({
          stack: ".draggable"
        });
        $( function() {
          $( ".droppable" ).droppable({
            drop: function( event, ui ) {
              $( this ).find( "p" );
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
                var rightBin = "#" + wordId;
                $(rightBin).effect("shake");
              }
            }
          });
        });
      }
    });
  }, 'json');
});