 /* jshint esversion:6 */

$(document).ready(function() {

  $.get('/api/wordlist', function(response) {
    var wordList = response;
    var score = 0;
    $('.word-div').jQCloud(wordList, {
      autoResize: true,
      colors: ["#884AA3"],
      afterCloudRender: function() {
        $('.draggable').draggable({
          stack: ".draggable"
        });
        var scoreCount = 0;
        $( function() {
          $( ".droppable" ).droppable({
            drop: function( event, ui ) {
              $( this ).find( "p" );
              var bin = event.target;
              var word = ui.draggable;

              var wordId = word[0].classList[1];
              if (wordId === bin.id) {
                score = score +100;
                scoreCount += 1;
                $('#score').text(score);
                $('#graphic').text("👍").fadeTo(500, 1).fadeTo(1000, 0);

                if (scoreCount === 36) {
                  $('.final-score').text(score);
                  $('.popup').fadeIn(1000);
                  $('[data-popup-close]').on('click', function(e)  {
                    
                    var targeted_popup_class = jQuery(this).attr('data-popup-close');
                    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
                    e.preventDefault();
                });
                  
                }
              } else {
                score = score -50;
                scoreCount += 1;
                $('#score').text(score);
                $('#graphic').text("👎").fadeTo(500, 1).fadeTo(1000, 0);
                var rightBin = "#" + wordId;
                $(rightBin).effect("shake");
                if (scoreCount === 36) {
                  $('.final-score').text(score);
                  $('.popup').fadeIn(1000);
                  $('[data-popup-close]').on('click', function(e)  {
                    
                    var targeted_popup_class = jQuery(this).attr('data-popup-close');
                    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
                    e.preventDefault();
                  });    
                }

                
              }
              $('.next-level').click(function() {
                  document.location = "./level2.html";
                });
                $('.try-again').click(function() {
                      location.reload();
                    });
            }

          });
        });
      }
    });
  }, 'json');

//   $(function() {
//     //----- OPEN
//     $('[data-popup-open]').on('click', function(e)  {
//         var targeted_popup_class = jQuery(this).attr('data-popup-open');
//         $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
//         e.preventDefault();
//     });
 
//     //----- CLOSE
//     
// });
});


