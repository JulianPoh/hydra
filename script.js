window.onload = function(){

    spawnTarget();
    startTimer();

};
   
    //Declare global variables
    var gameWindow = document.getElementById("game-window");
    var gameState = false;
    var gameLevel = 1;
    // Random x & y coordinates for game window.
    var x = Math.floor(Math.random() * (780 - 20 + 1)) + 10;
    var y = Math.floor(Math.random() * (480 - 20 + 1)) + 10;

       
    function setPlayerScore() {
        var playerScore = 0;
        var gameScore = document.getElementById("player-score");
        gameScore.innerHTML = playerScore;
    }
                   
    //Spawn Target Function
    function spawnTarget() {
        var newDiv = document.createElement('div'); 
        newDiv.setAttribute("id", "target-div");
        newDiv.style.position = "absolute";
        newDiv.style.left = x+'px';
        newDiv.style.top = y+'px';
        newDiv.style.backgroundColor = "green";

    function bombCountdown() {
        if (newDiv.style.backgroundColor == 'green') {
            newDiv.style.backgroundColor = "yellow";
        } else if (newDiv.style.backgroundColor == 'yellow') {
            newDiv.style.backgroundColor = "orange";
        } else if (newDiv.style.backgroundColor == 'orange') {
            newDiv.style.backgroundColor = "red";
        } else if (newDiv.style.backgroundColor == 'red') {
            alert("KABOOM!");
            gameState = false;
        }
    }
    var timer = setInterval(bombCountdown, 1500);

    function modify() {
        if (newDiv.style.backgroundColor == 'yellow') {
            newDiv.style.backgroundColor = "green";
        } else if (newDiv.style.backgroundColor == 'orange') {
            newDiv.style.backgroundColor = "yellow";
        } else if (newDiv.style.backgroundColor == 'red') {
            newDiv.style.backgroundColor = "orange";
        } else if (newDiv.style.backgroundColor == 'green') {
            clearInterval(timer);
            removeBomb();
            playerScore++;
        }
    }
    addEventListener('click', modify)

    function removeBomb() {
        gameWindow.removeChild(newDiv);
    }

    //Create target in game window
        gameWindow.appendChild(newDiv);
    }


