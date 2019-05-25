var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// var computerChoices = ['a', 'b']
var winsCounter = document.getElementById("winsCounter");
var lossesCounter = document.getElementById("lossesCounter");
var userGuessText = document.getElementById("userGuess");
var guessCounter = document.getElementById("guessCounter");
var alerter = document.getElementById("alerting");
var wins = 0
var losses = 0
var guessesLeft = 9
var taunts = ["Haha, not that one!", "Nope! Keep guessing!", "Ha! Some hero you are.", "Goblins guess better!", "Hee hee hee, try again!", "You'll never win like this!", "Your chances dwindle...", "I'll soon win!!", "I would never choose that!", "You will never win!", "Magic guards my mind"]
// function toggleMute() {
//     var music = $("#music");
//     console.log(music);
//     music.unMute();
// }
taunt = taunts[Math.floor(Math.random() * taunts.length)];

document.onkeyup = function (event) {
    taunt = taunts[Math.floor(Math.random() * taunts.length)];
    var userGuess = event.key;
    if (guessesLeft === 9) {
        window.computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guessesLeft--;
    }
    if (guessesLeft > 0 && guessesLeft < 9 && userGuess === window.computerGuess) {
        wins++;
        guessesLeft = 9;
        // console.log("Computer chose letter: " + computerGuess);
        // console.log("Player chose letter: " + userGuess);
        // console.log("You Won! Let's play again.");
        // alert("You Won! Let's play again.");
        alerter.textContent = "Dang! You guessed it!";
    } else if (guessesLeft === 8 && userGuess !== window.computerGuess) {
        guessesLeft--;
        // console.log("Computer chose letter: " + computerGuess);
        // console.log("Player chose letter: " + userGuess);
        // console.log("Player has " + (guessesLeft + 1) + " guesses left.");
        alerter.textContent = taunt;
    } else if (guessesLeft > 0 && guessesLeft < 8 && userGuess !== window.computerGuess) {
        guessesLeft--;
        // console.log("Computer chose letter: " + computerGuess);
        // console.log("Player chose letter: " + userGuess);
        // console.log("Player has " + (guessesLeft + 1) + " guesses left.");
        alerter.textContent = taunt;
    } else if (guessesLeft === 0 && userGuess !== window.computerGuess) {
        guessesLeft--;
        losses++;
        // console.log("You ran out of guesses. You lose!");
        guessesLeft = 9;
        alerter.textContent = "Tee hee hee! I win!";
        // alert("You Lost! Let's play again.")
    }
    winsCounter.textContent = " " + wins + " ";
    lossesCounter.textContent = " " + losses + " ";
    if (guessesLeft === 9) {
        userGuessText.textContent = "...";
    } else {
        userGuessText.textContent += (userGuess + ", ");
    }
    if (guessesLeft === 9) {
        guessCounter.textContent = " " + guessesLeft + " ";
    } else {
        guessCounter.textContent = " " + (guessesLeft + 1) + " ";
    }
}