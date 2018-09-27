
var words = ["khaleesi", "maester", "greyscale", "wildlings", "kingslayer", "hound", "snow", "sesteros"]
var wins = 0;
//Chances Left
var chancesLeft = document.getElementById("chances");


//Current Word
var currentWord = document.getElementById("current-word");
var wordArray = [];
var chosenWord;
var newUnder = [];


// Wrong Letter
var wrongChoice = document.getElementById("wrong-letter");

// Key Logged
var keyLogged = [];


    // When the page loads the hangman function will occur
// Randomize word and print out the underscores for the length of the word 
window.onload = function newWord() {
    // a random choice from words will be put into variable
    chosenWord = words[Math.floor(Math.random() * words.length)];
    // The underscores randomChoice.length
    wordArray = chosenWord.split("");
    for (var i = 0; i < wordArray.length; i++) {
        //Make an array of underscore
        newUnder.push("_");
        currentWord.textContent= newUnder.join(" ");
    }
    //Displays the chances left
    chancesLeft.textContent = 12;
    



    // When user presses key a variable holds it
    document.onkeyup = function (event) {
        var keyPressed = event.key.toLowerCase();
        

        //If the keypressed is in keyLogged
        if ( keyLogged.indexOf(keyPressed) > -1) {
            return false; 
        }
        else {
            keyLogged.push(keyPressed);
        }

        //if the keypressed is in the chosen word 
        if (chosenWord.indexOf(keyPressed) > -1) {
            //replace the _ with the letter at the same index 
            // find where exactly in the array it is and add that key to the DOM
            
        } else {
            // wrongChoice.append = keypressed;
            wrongChoice.textContent += keyPressed;
            //chancesLeft --; 
            chancesLeft.textContent -= 1;   
        }
        // if all of the underscores 
        if (newUnder.indexOf("_")){
            wins.textContent += 1;
            // newWord();
        }

        // if chances left is zero then 
        if (chancesLeft === 0){
            //have a reset function

        }


        // when a win happens then an image of that person will appear

    };
};