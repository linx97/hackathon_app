 /*jshint-esversion6*/

$(document).ready(function() {

  $.get('/api/wordlist', function(response) {
    var wordList = response;
   var score = 0;
   $('.word-div').jQCloud(wordList, {

      autoResize: true,
      colors: ["#9932cc", "#9932cc", "#A33FD0", "#B148D6", "#BD55E1", "#C85EE7"],
      afterCloudRender: function() {
        $('.draggable').draggable();
        $( function() {
          $( ".droppable" ).droppable({
            drop: function( event, ui ) {
              $( this )

              .find( "p" );
              var bin = event.target;
              var word = ui.draggable;
          
              var wordId = word[0].classList[1];
              if (wordId === bin.id) {
                score = score +10;
                $('#score').text(score);
                $('#graphic').append("<img src=\"http://www.clker.com/cliparts/D/z/C/2/q/E/check-mark-md.png\">");
                

              } else {
                score = score -5;
                $('#score').text(score);

              }
            }
          });
        });
      }
    });
  }, 'json');
});


