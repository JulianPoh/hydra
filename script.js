window.onload = function(){
    //Declare game window
    var gameWindow = document.getElementById("game-window");
    var gameState = false;
    //Set random x & y coordinates for game window.
    var x = Math.floor(Math.random() * (780 - 20 + 1)) + 10;
    var y = Math.floor(Math.random() * (580 - 20 + 1)) + 10; 

    //Get playerName
    // var playerName = prompt("Please enter your name to start.");
    //Set playerScore to 0
    // var playerScore = 0;
    //Create Timer (30000ms per round)
    function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }   
            
    //Spawn Target Function
    function spawnTarget() {
        var newDiv = document.createElement('div');
        newDiv.setAttribute("id", "target-div");
        newDiv.style.position = "absolute"
        newDiv.style.left = x+'px';
        newDiv.style.top = y+'px';
        newDiv.style.backgroundColor = "green";
        //Change target Color from green-orange-red
        setTimeout(function(){ newDiv.style.backgroundColor = "yellow"; }, 1500);
        setTimeout(function(){ newDiv.style.backgroundColor = "orange"; }, 3000);
        setTimeout(function(){ newDiv.style.backgroundColor = "red"; }, 4500);
        setTimeout(function(){ newDiv.style.backgroundColor = "red"; }, 6000);
         
        //Create target in game window
        gameWindow.appendChild(newDiv);
    }
    
    
              
    spawnTarget();

    //Set to despawn after x seconds
    //Add click eventlistener function
    //Despawns (Destroyed) on click
    //Target Destroyed Counter ++

    //Game Play
        //Instructions: click 90% to proceed.
        //gameState = true
        //Reset Target Destroyed Counter.
        //Start Timer
        // var thirtySecs = 30,
        //     display = document.querySelector("#time");
        // startTimer(thirtySecs, display);
        //Spawn 1 target per second. End on timer.
        //Count Number of Spawns  & Calculate 90% mark rounded down to int.
        //Clicked targets >= 90% - playerScore ++
            //Clicked targets <90% - gameState = false
        //Round ++, Spawn Speed ++
        //Repeat.



};

