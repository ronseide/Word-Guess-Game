
var wordList = ["crowded", "temple", "woodface", "together"];;
 
var word = wordList[0];
var userGuess = [""];
var userGuesses = [""];
var answerArray = [];
var remainingLetters;

// This is a cheat, you can click anywhere on the document and the function will execute. It should execute only on the button click, id = "start"

//document.getElementById("start").onclick = function () {
document.onclick = function () {
    var computerChoice = Math.floor(Math.random() * 4);
    word = wordList[computerChoice];
    answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    remainingLetters = word.length;
    console.log("Guesses are " + word.length);
    console.log("Initial answerArray is " + answerArray);
    document.getElementById("word").innerHTML = ("Your word to guess is " + answerArray.join(" "));
    userGuess = [""];
    userGuesses = [""];
    document.getElementById("word-status").innerHTML = "";
    document.getElementById("user-guess").innerHTML = "";
    document.getElementById("game-status").innerHTML = "";
}
document.onkeyup = function (event) {
    userGuess = event.key;
//this function always returns false even when it's true
    var answer  = answerArray.includes(userGuess);
            console.log("Answer is " + answer);
    
    for (var j = 0; j < word.length; j++) {
        if (word[j] === userGuess) {
        answerArray[j] = userGuess;
        remainingLetters--;
        }
        }
        


    //console.log(userGuess);
    //console.log("Keystroked answerArray is " + answerArray);
    document.getElementById("word").innerHTML = (answerArray);
    document.getElementById("word-status").innerHTML = ("You have " + remainingLetters + " letters to go");
    console.log("Aswer Array is " + answerArray);
    console.log("Remaining Letters are " + remainingLetters);
    //console.log(userGuess);
    userGuesses.push(userGuess);
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
                        document.getElementById("user-guess").innerHTML = "Game Over, dude";
                        document.getElementById("game-status").innerHTML = "Click Start Game to play again";
                        console.log("Game over, click refresh to start a new game.")
                    }
}


//     if (userGuesses.length = 4) {
//         console.log("game over");
//         //document.getElementById("game-status").innerHTML = "Game Over";
//     }
//     // else
//     //     if (userGuesses.length > 2) {
//     //         document.getElementById("game-status").innerHTML = "Game Over";
//     //     }
// }


//document.getElementById("start").onclick = function() {myFunction()};

// function myFunction() {
//   document.getElementById("word").innerHTML = "This is a word";
// }




// document.onkeyup = function (event) {
//     var word = event.key
// document.getElementById("word").innerHTML = ("The word to guess is " + word[0]);
// }



