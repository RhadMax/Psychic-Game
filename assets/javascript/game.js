var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// var computerChoices = ['a', 'b']
var winsCounter = document.getElementById("winsCounter");
var lossesCounter = document.getElementById("lossesCounter");
var userGuessText = document.getElementById("userGuess");
var guessCounter = document.getElementById("guessCounter");
var wins = 0
var losses = 0
var guessesLeft = 9
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Computer chose letter: " + computerGuess);
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (guessesLeft === 9) {
        guessesLeft--;
    }
    if (guessesLeft > 0 && guessesLeft < 9 && userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        // 
        // console.log("Player chose letter: " + userGuess);
        // console.log("You Won! Let's play again.");
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("Computer chose letter: " + computerGuess);

        alert("You Won! Let's play again.")
    } else if (guessesLeft === 8 && userGuess !== computerGuess) {
        guessesLeft--;
        // console.log("Computer chose letter: " + computerGuess);
        // console.log("Player chose letter: " + userGuess);
        // console.log("Player has " + (guessesLeft + 1) + " guesses left.");
    } else if (guessesLeft > 0 && guessesLeft < 8 && userGuess !== computerGuess) {
        guessesLeft--;
        // console.log("Computer chose letter: " + computerGuess);
        // console.log("Player chose letter: " + userGuess);
        // console.log("Player has " + (guessesLeft + 1) + " guesses left.");
    } else if (guessesLeft === 0 && userGuess !== computerGuess) {
        guessesLeft--;
        losses++;
        // console.log("You ran out of guesses. You lose!");
        guessesLeft = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("Computer chose letter: " + computerGuess);

        alert("You Lost! Let's play again.")
    }
    winsCounter.textContent = wins;
    lossesCounter.textContent = losses;
    if  (guessesLeft === 9) {
        userGuessText.textContent = " ";
    } else {
        userGuessText.textContent += (userGuess + ", ");
    }
    if (guessesLeft === 9) {
        guessCounter.textContent = guessesLeft;
    } else {
        guessCounter.textContent = (guessesLeft + 1);
    }
}