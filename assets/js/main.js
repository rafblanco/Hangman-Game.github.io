//Global Variables

var words = ["khaleesi", "maester", "greyscale", "wildlings", "kingslayer", "hound", "snow", "westeros"];
//Wins 
var winsText = document.getElementById("wins");
var wins = 0;
winsText.textContent = wins;

//Chances Left
var chances = document.getElementById("chances");
var chancesLeft = 12;

//Current Word
var chosenWord;

// Wrong Letter
var wrongChoice = document.getElementById("wrong-letter");

// Key Logged
var keyLogged = [];



// Randomize word 
function newWord() {

    // a random choice from words will be put into variable
    chosenWord = words[Math.floor(Math.random() * words.length)];

    keyLogged = [];
    // //Displays the chances left
    chancesLeft = 12;
    chances.textContent = chancesLeft;
    wrongChoice.textContent = "";
};

// When the page loads the function will occur
window.onload = newWord();

// When user presses key a variable holds it
var good_letters = [];
var print_word = "";
//Function that prints out the letters and underscores 
function print() {
    print_word = "";
    document.getElementById("current-word").textContent = print_word;
    for (var i = 0; i < chosenWord.length; i++) {
        if (good_letters.indexOf(chosenWord[i]) > -1) {
            print_word += "" + chosenWord[i] + "";
        } else {
            print_word += "_";
        }
    }
    document.getElementById("current-word").textContent = print_word;
}

document.onkeyup = function (event) {
    var keyPressed = event.key.toLowerCase();
    // if chances left is zero then 
    if (chancesLeft === 0) {
        //If the keypressed is in keyLogged
        newWord();
    } else {  
        if (keyLogged.indexOf(keyPressed) > -1) {
            return false;
        }
        else {
            keyLogged.push(keyPressed);
        }

        if (print_word.includes(chosenWord)) {
            wins += 1;
            winText.textContent = wins;
            newWord();
            print();

        } else {
           if (chosenWord.indexOf(keyPressed) > -1) {
                good_letters.push(keyPressed)
            } else {
                wrongChoice.textContent += " " + keyPressed;
                chancesLeft -= 1;
                chances.textContent = chancesLeft;
            }
        } 
    }        

    




    // when a win happens then an image of that person will appear

    print();
};
print();
