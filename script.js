

//Declare global variables
var gameWindow = document.getElementById("game-window");
var maxHydraHeads = 50;
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
var timerId;



function startCountDown() { //Color Changing Function
    for (var i = 0; i < heads.length; i++) {
        if (heads[i].style.backgroundColor == 'green' && timeLeft > 0 && heads[i].style.display == 'inline-block') {
            heads[i].style.backgroundColor = "yellow";
        } else if (heads[i].style.backgroundColor == 'yellow' && timeLeft > 0 && heads[i].style.display == 'inline-block') {
            heads[i].style.backgroundColor = "orange";
        } else if (heads[i].style.backgroundColor == 'orange' && timeLeft > 0 && heads[i].style.display == 'inline-block') {
            heads[i].style.backgroundColor = "red";
        } else if (heads[i].style.backgroundColor == 'red' && timeLeft > 0 && heads[i].style.display == 'inline-block')  {
            heads[i].style.display = "none";
            gameWindow.style.backgroundColor = "red";
            clearTimeout(timerId);
            clearInterval(generalTime);
            gameWindow.innerHTML = "GAME OVER";
            gameState = false;
        } else if (timeLeft <0 ) {
            heads[i].style.display = "none";
            gameWindow.style.backgroundColor = "blue";
            gameWindow.innerHTML = "TIME OVER";
            gameState = false;
        }
    }
}

function slowReveal() {
    if (headsCounter < maxHydraHeads){
        heads[headsCounter].style.display = "inline-block";
        headsCounter++;
        // var timer = setInterval(function () {startCountDown(timer)}, 3000);
    }
}

// var revTimer = setInterval(slowReveal, 1000);


function modify() { //Reverse Color & Clear Function
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

//Game Timer Function
var timeLeft = 30;
var elem = document.getElementById('time');
// var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
}

var check = 0;
function collate () {
    countdown();
    slowReveal();
    check++;
    if(check%3 == 0) {
        startCountDown();
    }
}

var generalTime = setInterval(collate, 1000);
countdown();





   