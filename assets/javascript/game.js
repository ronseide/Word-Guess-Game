
//Set global variables used throughout the program
var wordList = ["crowded", "temple", "woodface", "together"];;
var word = wordList[0];
var userGuess = [""];
var userGuesses = [""];
var answerArray = [];
//Sets a variable to the button id to be used later by the clicker function
var start = document.getElementById("start");

//The function clicker starts the game with a button click. It generates a random number to be used as an index to chose a word from var wordList and sets it to var word. It then creates var answerArray which is displayed to the user as underscores.
window.onload = function () {
    document.getElementById("start").addEventListener("click", clicker)
    function clicker() {
        userGuess = [""];
        userGuesses = [""];
        var computerChoice = Math.floor(Math.random() * 4);
        word = wordList[computerChoice];
        answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
        document.getElementById("word").innerHTML = ("Your word to guess is " + answerArray.join(" "));
        document.getElementById("word-status").innerHTML = "";
        document.getElementById("user-guess").innerHTML = "";
        document.getElementById("game-status").innerHTML = "";
    }
//This function fires upon a user's key up and captures the key pressesd. It updates var answerArray with the user's key press value if it's found at any character within var word. 
    document.onkeyup = function (event) {
        userGuess = event.key;
        console.log("user guess is " + userGuess);
        var answer = word.includes(userGuess);
        console.log("Answer is " + answer);
        console.log("Word is " + word);
        for (var j = 0; j < word.length; j++) {
            if (word[j] === userGuess) {
                answerArray[j] = userGuess;

            }
        }
        document.getElementById("word").innerHTML = (answerArray);
//If var userGuess is not found within var answer, var userGuess is appended to the end of array var userGuesses   
        if (!answer) {
            userGuesses.push(userGuess);
        }
//The var remainingLetters is established as a intiger and then updated by loopiong through var answerArray and incrementing the integer every time an underscores is found within var answerArray after it has been updated with var userGuess. This accounts for instances where a single keystroke results in multiple var userGuess equivalancies within var word.
        var remainingLetters = 0;
        for (var k = 0; k < answerArray.length; k++) {
            if (answerArray[k] === "_") {
                remainingLetters++;
            }
            document.getElementById("word-status").innerHTML = ("You have " + remainingLetters + " letters to go");
        }
//Var userGuesses is continually evaluated to count down remaining guesses. When var userGuesses is six the game is lost and ends. 
        document.getElementById("user-guess").innerHTML = ("Your Guesses " + userGuesses.join(" "));
        if (userGuesses.length < 3) {
            document.getElementById("game-status").innerHTML = "You have four more guesses";
            console.log("You have four more guesses");
        }
        else
            if (userGuesses.length < 4) {
                document.getElementById("game-status").innerHTML = "You have three more guesses";
                console.log("You have three more guesses");
            }
            else
                if (userGuesses.length < 5) {
                    document.getElementById("game-status").innerHTML = "You have two more guesses";
                    console.log("You have two more guesses");
                }
                else
                    if (userGuesses.length < 6) {
                        document.getElementById("game-status").innerHTML = "You have one more guess";
                        console.log("You have one more guess");
                    }
                    else
                        if (userGuesses.length = 6) {
                            document.getElementById("user-guess").innerHTML = "Game Over, you lost dude";

                            document.getElementById("game-status").innerHTML = "Click Start Game to play again";
                            console.log("Game over, click refresh to start a new game.")
                        }
//When var remainingLetters reaches 0 the game is won and ends. 
        if (remainingLetters === 0) {
            document.getElementById("user-guess").innerHTML = "Game Over, you won dude";
        }
    }
}

