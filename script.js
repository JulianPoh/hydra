

//Declare global variables
var gameWindow = document.getElementById("game-window");
var maxHydraHeads = 100;
var playerScore = 0;


for (var i=0; i<maxHydraHeads; i++) {  //Generate Heads
    var newHead = document.createElement("button");
    newHead.setAttribute("class", "head");
    newHead.style.width = "70px";
    newHead.style.height = "70px";
    newHead.style.borderRadius = "50%";
    newHead.style.backgroundColor = "green";
    newHead.style.backgroundImage = "url('img/head.png')";
    newHead.style.position = "absolute";
    var x = Math.floor(Math.random() * (730 - 70 + 1)) + 10;
    newHead.style.left = x.toString() +'px';
    var y = Math.floor(Math.random() * (430 - 70 + 1)) + 10;
    newHead.style.top = y.toString() +'px';
    newHead.addEventListener('click', modify);


    newHead.style.display = "none";
    gameWindow.appendChild(newHead);
}

var heads = document.querySelectorAll("button");
console.log(heads);
var headsCounter = 0;
var timer;

function slowReveal() {

    function startCountDown() {
        if (heads[headsCounter].style.backgroundColor == 'green' && timeLeft > 0) {
            heads[headsCounter].style.backgroundColor = "yellow";
        } else if (heads[headsCounter].style.backgroundColor == 'yellow' && timeLeft > 0) {
            heads[headsCounter].style.backgroundColor = "orange";
        } else if (heads[headsCounter].style.backgroundColor == 'orange' && timeLeft > 0) {
            heads[headsCounter].style.backgroundColor = "red";
        } else if (heads[headsCounter].style.backgroundColor == 'red' && timeLeft > 0) {
            heads[headsCounter].style.display = "none";
            gameWindow.style.backgroundColor = "red";
            gameWindow.innerHTML = "GAME OVER";
            gameState = false;
        } else if (timeLeft == 0 ) {
            heads[headsCounter].style.display = "none";
            gameWindow.style.backgroundColor = "red";
            gameWindow.innerHTML = "GAME OVER";
            gameState = false;
        }
    }

    if (headsCounter < maxHydraHeads){
        heads[headsCounter].style.display = "inline-block";
        headsCounter++;
        timer = setInterval(startCountDown, 3000);
    }
}

var revTimer = setInterval(slowReveal, 1000);


function modify() {
    if (this.style.backgroundColor == 'yellow') {
        this.style.backgroundColor = "green";
    } else if (this.style.backgroundColor == 'orange') {
        this.style.backgroundColor = "yellow";
    } else if (this.style.backgroundColor == 'red') {
        this.style.backgroundColor = "orange";
    } else if (this.style.backgroundColor == 'green') {
        clearInterval(timer);
        this.style.display = "none";
        playerScore++;
        var theScore = document.getElementById("score")
        theScore.innerHTML = playerScore;
    }
}









// var gameState = false;
// // Random x & y coordinates for game window.
// // var x = Math.floor(Math.random() * (730 - 70 + 1)) + 10;
// // var y = Math.floor(Math.random() * (430 - 70 + 1)) + 10;


// var gameScore = document.getElementById("score");
// gameScore.innerHTML = playerScore;


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
countdown();





   