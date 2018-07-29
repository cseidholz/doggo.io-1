jQuery(document).ready(function($){
    let counter = 0;
    var colorsArray = ['red', 'blue', 'green', 'purple','green','orange','aqua','pink','dgreen','yellow','rainbow'];
    var lololol = "";
    
  
    //SMALL SCREEN HORIZONTAL SCROLL BETWEEN CARDS
  
    // var scrollPosition = ($('.card').width() - $('#playingtable').width());
    // $( "#playingtable" ).scrollLeft(scrollPosition);
  
  
    // creating leaderboard
    // createLeaderboardLineup()
  
    $('#lol').click(function() {
      $('#lol').addClass('doggyhat')
    });
  
  
    $('#card1').html(createCard(randomColor()));
    $('#card2').html(createCard(randomColor()));
    // fetchDoggo("#card1","#card2")
    //CLICKING ON WINNER
    $('#card1, #card2').on("click", function() {
      $(this).removeClass('hoverscale');
      $(this).addClass('twirl-animation').delay(1000).queue(function() {
        $(this).removeClass('twirl-animation').dequeue()
        // fetchDoggo("#card1");
        // fetchDoggo("#card2");
        $('#card1').html(createCard(randomColor()));
        $('#card2').html(createCard(randomColor()));
        $(this).addClass('hoverscale');
      });
    });
  
    $('#leaderboardtable').hide()
  
    //MENU SWITCH
    $('#button1').click(function() {
      togglePlayingBoard()
    });
  
  
  
  
    //FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS
  
    function createCard(color) {
      return '<div class="front side-positioning ' +color+'"><div class="doggo-container"><div class="doggo"><img src="'+lololol+'"></div><div class="elo">ELO:' + randomELO(1000,9999) + '</div></div><div class="cardinfo"><a href="" target="_blank">doggo source</a><p>some random text to talk about this cute pupper...</p></div></div><div class="back side-positioning"></div></div>'
    }
    //RANDOM ELO NUMBER
    function randomELO(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
    function fetchDoggo() {
      // rootSelector = #card1 or #card2
      $.ajax( {
        url: 'https://random.dog/woof.json',
        error: function() {
          // $(rootSelector + ' img').html('<p>An error has occurred</p>');
        },
        type: 'GET',
        cache: false,
        format:'json',
        dataType:'json',
        success:function(response) {
          // $(rootSelector + ' img').attr("src", response.url);
          lololol = response.url;
        }
      });
    }
  
    function randomColor() {
      return colorsArray[Math.floor(Math.random()*colorsArray.length)]
    }
  
    function createLeaderboardLineup() {
      for(let i=0;i<30;i++){
        $('#leaderboardCards').append('<div class="carousel-cell"><div class="card">' + createCard() +'</div></div>')
        $('#leaderboard > #card').addClass(colorsArray[Math.floor(Math.random()*colorsArray.length)])
        fetchDoggo('#card')
      }
    }
  
    function togglePlayingBoard() {
      $( "#leaderboardtable, #playingtable" ).toggle();
      counter = counter + 1;
      if ( counter % 2 ) {
        $("#button1").addClass("animation")
        $("#button1").html("t<span>o</span>p d<span>o</span>g<span>g</span>o<span>s</span>")
      } else {$("#button1").removeClass("animation")
              $("#button1").html("<span>d</span>og<span>g</span>o<span>.</span>i<span>o</span>")}
    }
  
  })//DOCUMENT FUNCTION