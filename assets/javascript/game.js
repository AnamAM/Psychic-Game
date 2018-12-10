var compLetterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userWins = 0;
var userLosses = 0;
var numOfGuesses = 9;
var userLetterGuesses = [];

document.onkeydown = function(event) {
    var userGuesses = event.key;
    
    var compLetterGuess = compLetterChoices[Math.floor(Math.random() * compLetterChoices.length)];
    
    var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 
    if (choices.indexOf(userGuesses) > -1) {
        
        if (userGuesses === compLetterGuess) {
            userWins++;
            numOfGuesses = 9;
            userLetterGuesses = [];
        }
        
        if (numOfGuesses === 0) {
            userLosses++
            numOfGuesses = 9;
            userLetterGuesses = [];
        }
        
        if (userGuesses != compLetterGuess) {
            numOfGuesses--;
            userLetterGuesses.push(userGuesses);
        }
        
        var html = 
        "<h1><strong>The Psychic Game</strong><h1>" + 
        "<section>Guess what letter I'm thinking of!</section>" + 
        "<section>Wins: " + userWins + "</section>" + 
        "<section>Losses: " + userLosses + "</section>" +
        "<section>Guesses Left: " + numOfGuesses + "</section>" + 
        "<section>Your guesses so far: " + userLetterGuesses.join(", ") + "</section";

        document.querySelector("#psychicgame").innerHTML = html;
    };

};


