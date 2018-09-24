
var words = ["khaleesi", "maester", "greyscale", "wildlings", "kingslayer", "hound", "snow", "sesteros"]
var wins = 0;
var chancesLeft = document.getElementById("chances"); 
var userChoice = document.getElementById("user");
var newUnder = document.getElementById("current-word");
var wrongChoice = document.getElementById("wrong-letter")


// var wordChosen  = function () {
//     var randomString = words[Math.floor(Math.random() * words.length)];
//     return randomString;
//     };



// Randomize word and print out the underscores for the length of the word 
function newWord(){
    // a random choice from words will be put into variable
    var chosenWord = words[Math.floor(Math.random() * words.length)];
    // The underscores randomChoice.length
    for (var i = 0; i < chosenWord.length; i++){
        //print " _ " on Current word 
        newUnder.insertAdjacentText('beforeend', " _ ")
    }
    //Displays the chances left
    chancesLeft.textContent = chosenWord.length;
    };

// When the page loads the hangman function will occur
window.onload = newWord(); 

// When user presses key a variable holds it
document.onkeyup = function (event) {
    var keyPressed = event.key.toLowerCase(); 
        //If the keypressed is in chosen word 
    if (chosenWord.indexOf(keyPressed) > -1){
        //replace the _ with the letter
    } else {
    //         wrongChoice.append == keypressed;
        
    //         chancesLeft --;    
    }

    // };
    // if keypressed is already pressed nothing will happen 



    // when a win happens then an image of that person will appear
      
};