let min = 1;
let max = 5;
let min2 = 1;
let max2 = 2;
let randomDoor = Math.floor(Math.random() * (max - min + 1)) + min;

function randomIntf() {
let randomInt = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
return randomInt;
}
let playerGuess; 

const WelcomeMsg = document.querySelector("#welcome-msg");
const WelcomeSubMsg = document.querySelector("#welcome-sub-msg");

const door1 = document.querySelector('#door1');
const door2 = document.querySelector("#door2");
const door3 = document.querySelector("#door3");
const door4 = document.querySelector('#door4');
const door5 = document.querySelector("#door5");

door1.onclick = function() {
    playerGuess = 1;
    playGame();
}

door2.onclick = function() {
    playerGuess = 2;
    playGame();
}

door3.onclick = function() {
    playerGuess = 3;
    playGame();
}

door4.onclick = function() {
    playerGuess = 4;
    playGame();
}

door5.onclick = function() {
    playerGuess = 5;
    playGame();
}


function playGame() {
    WelcomeSubMsg.innerText = "";
    if (playerGuess == randomDoor) {
        WelcomeMsg.innerText = "Congratulations!!! You found the cat!";
    } else {
        WelcomeMsg.innerText = "The cat has moved to an adjacent door. Try again.";
        moveCat(); 
    }
}


function moveCat()
{
            if (randomIntf() == 1) 
            {
                if (randomDoor == 1) 
                {
                randomDoor++;
                } 
                else 
                {
                    randomDoor--;
                }
            } 
            else if (randomIntf() == 2) 
                {
                    if (randomDoor == 5)
                    {
                        randomDoor--;
                    } else
                    {
                        randomDoor++;
                    }
                }
}


