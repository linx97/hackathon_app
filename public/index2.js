 /* jshint esversion:6 */

$(document).ready(function() {

  $.get('/api/wordlist2', function(response) {
    var wordList = response;
    var score = 0;
    $('.word-div').jQCloud(wordList, {
      autoResize: true,
      colors: ["#6199B1"],
      afterCloudRender: function() {
        $('.draggable').draggable({
          stack: ".draggable",
          drag: function (evt){
           var target  = $(evt.target);
           var top = target.position().top;
           if(top > 320){
             var scale =  1- ((top - 300) / (440-300));
             target.css("transform", "scale("+scale+", 1)");
           }
           else{
             target.css("transform", "scale(1, 1)");
           }
         }
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

                if (scoreCount === 24) {
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
                if (scoreCount === 24) {
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

});
