
window.onload = function() {
	newGame();
};

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//	New Game Function 
  	newGame = function() {
  		randomNumber =  Math.floor((Math.random() * 100)+1);
  		$('span#count').text(0);
  		$('ul#guessList').empty();
  		$('h2#feedback').text("Make your Guess!");
  		$('input#userGuess').val('');
        console.log("RandomNumberCheck: "+randomNumber);
  	};

//  	New game when players clicks new game 
    
  	$('a.new').click(function(){
  		newGame();
  	});

  	
//  Player Feedback
    
  	playerFeedback = function() {
  		var feedbackText = "Your guess is ";
  		if (randomNumber == playerGuess) {
  			$('h2#feedback').text("Well Done! You have guessed correctly!");
  		}
  		else if (guessSpan < 2) {
  			$('h2#feedback').text(feedbackText+"Your scorching!!");
  		}
  		else if (guessSpan < 5) {
  			$('h2#feedback').text(feedbackText+"very hot!");
  		}
  		else if (guessSpan < 10) {
  			$('h2#feedback').text(feedbackText+"hot");
  		}
  		else if (guessSpan < 15) {
  			$('h2#feedback').text(feedbackText+"warm");
  		}
  		else if (guessSpan < 20) {
  			$('h2#feedback').text(feedbackText+"cold");
  		}
  		else if (guessSpan < 30) {
  			$('h2#feedback').text(feedbackText+"very cold!");
  		}
  		else if (guessSpan < 40) {
  			$('h2#feedback').text(feedbackText+"ice cold!!");
  		}
  		else if (guessSpan >= 40) {
  			$('h2#feedback').text(feedbackText+"ice , ice baby!!!");
  		};
  	};

//  	Display previous guesses
    
  	prevGuesses = function() {
	  	$('ul#guessList').append('<li>'+playerGuess+'</li>');
	};

  	count = 0;

//  	Guess button behaviour
    
  	$('input#guessButton').click(function(event){
  		event.preventDefault();
  		playerGuess = $('input#userGuess').val();
  		if (isNaN(playerGuess)) {
  			$('h2#feedback').text("Whoops! I only accept numbers.");
  		} else if (playerGuess === " ") {
  			
  		}else if (playerGuess < 1 || playerGuess > 100) {
  			$('h2#feedback').text("Sorry, you need to enter a number between 1 and 100.");
  		}else {
	  		guessSpan = Math.abs(playerGuess - randomNumber);
	  		playerFeedback();
	  		prevGuesses();
			count++;
			$('span#count').text(count);
		};
  	});


});
