var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    
var words = ["rock", "paper", "scissor"];

var word = words[Math.floor(Math.random() * words.length)];
alert("The computer chose " + word);
return word;
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    
    if(userValue == "rock"&& aiValue =="paper"){
        return "ai";
    }
    
       if(userValue == "rock"&& aiValue =="rock"){
        return "draw";
    }
    
       if(userValue == "rock"&& aiValue =="scissor"){
        return "user";
    }
    
       if(userValue == "paper"&& aiValue =="paper"){
        return "draw";
    }
    
       if(userValue == "paper"&& aiValue =="scissor"){
        return "ai";
    }
    
           if(userValue == "paper"&& aiValue =="rock"){
        return "user";
    }
    
           if(userValue == "scissor"&& aiValue =="scissor"){
        return "draw";
    }
    
             if(userValue == "scissor"&& aiValue =="paper"){
        return "user";
    }
    
             if(userValue == "scissor"&& aiValue =="rock"){
        return "ai";
    }
        
    // todayi did all these if statements!!!! 11/12/15 
    
    
    
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
}

// This function sets the scoreboard with the correct points
function setScore() {
    $('#userPoint').text(userPoint);
    $('#aiPoint').text(aiPoint)

}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);
    

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
        userPoint= userPoint+1;
       
         } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
         aiPoint= aiPoint+1;
    }
    setScore()
}

// This function runs on page load
$(document).ready(function(){

$( "#rock" ).click(function(evt) {
  alert( "You have clicked rock." ); 
  evaluate(evt);
});

$( "#paper" ).click(function(evt) {
  alert( "You have clicked paper." );
   evaluate(evt);
});

$( "#scissor" ).click(function(evt) {
  alert( "You have clicked scissor." );
   evaluate(evt);
})

});






//I ENDED HERE 10/5/15
//today i made the three buttons click and respond "you have clicked THIS BUTTON"