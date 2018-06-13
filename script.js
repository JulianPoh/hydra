window.onload = function(){

    setPlayerScore();
    countdown()
    spawnTarget();


    

};
   
//Declare global variables
var gameWindow = document.getElementById("game-window");
var gameState = false;
var gameLevel = 1;
// Random x & y coordinates for game window.
var x = Math.floor(Math.random() * (800 - 0 + 1)) + 10;
var y = Math.floor(Math.random() * (500 - 0 + 1)) + 10;

   
function setPlayerScore() {
    var playerScore = 0;
    var gameScore = document.getElementById("score");
    gameScore.innerHTML = playerScore;
}

//Game Timer Function
var timeLeft = 30;
var elem = document.getElementById('time');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
}

//Spawn Target Function
function spawnTarget() {
    var newDiv = document.createElement('div'); 
    newDiv.setAttribute("id", "target-div");
    newDiv.style.position = "absolute";
    newDiv.style.left = x+'px';
    newDiv.style.top = y+'px';
    newDiv.style.backgroundColor = "green";
    newDiv.innerHTML = "'_'";

//Spawn Multiple Targets
function spawnMultipleTargets() {
    for (var i=0; i<100; i++);
        if (timeLeft > 0 && gameState == true) {
            spawnTarget([i]);
        }
}
var multiTargetsTimer = setInterval(spawnMultipleTargets, 1500);

//Color Countdown till bomb explodes
function bombCountdown() {
    if (newDiv.style.backgroundColor == 'green') {
        newDiv.style.backgroundColor = "yellow";
        newDiv.innerHTML = "o_o";
    } else if (newDiv.style.backgroundColor == 'yellow') {
        newDiv.style.backgroundColor = "orange";
        newDiv.innerHTML = "0_0";
    } else if (newDiv.style.backgroundColor == 'orange') {
        newDiv.style.backgroundColor = "red";
        newDiv.innerHTML = "x_x";
    } else if (newDiv.style.backgroundColor == 'red') {
        alert("KABOOM!");
        gameState = false;
    }
}
var timer = setInterval(bombCountdown, 1500);

//Function to change bomb color and diffuse bomb upon mouseclick
function modify() {
    if (newDiv.style.backgroundColor == 'yellow') {
        newDiv.style.backgroundColor = "green";
        newDiv.innerHTML = "'_'";
    } else if (newDiv.style.backgroundColor == 'orange') {
        newDiv.style.backgroundColor = "yellow";
        newDiv.innerHTML = "o_o";
    } else if (newDiv.style.backgroundColor == 'red') {
        newDiv.style.backgroundColor = "orange";
        newDiv.innerHTML = "o_o";
    } else if (newDiv.style.backgroundColor == 'green') {
        clearInterval(timer);
        removeBomb();
        playerScore++;
    }
}
addEventListener('click', modify)

//Clear diffused bomb from game screen
function removeBomb() {
    gameWindow.removeChild(newDiv);
}

//Create target in game window
    gameWindow.appendChild(newDiv);
}


