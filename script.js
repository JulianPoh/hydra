window.onload = function(){

var gameWindow = document.getElementById("game-window");

//Main Game Menu
    //Get playerName
    // var playerName = prompt("Please enter your name to start.");

    //Set playerScore to 0


//Shooting Game
    //Create Timer
    //30000ms per round
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


    //Create Target Destroyed Counter

    //spawnSingleTarget Function
        //Create target & set random spawn Location
            var target
            var targetCounter = 0;
            //Randomize x&y coordinates
            var x = Math.floor(Math.random() * (780 - 20 + 1)) + 10;
            var y = Math.floor(Math.random() * (580- 20 + 1)) + 10; 
            //Spawn Target Function
            function spawnTarget() {
                var newDiv = document.createElement('div');
                newDiv.setAttribute("id", "target-div");
                newDiv.style.width = 50;
                newDiv.style.height = 50;
                newDiv.style.background = "red";
                newDiv.style.position = "absolute"
                newDiv.style.left = x+'px';
                newDiv.style.top = y+'px'; 
                gameWindow.appendChild(newDiv);
                newDiv.addEventListener('click', function() {
                    targetCounter ++
                    // gameWindow,removeChild(newDiv);
                    })
                };
        //Call Functions
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


//Diffuse Bomb Game
    //Create Timer
        //30000ms per round

    //spawnSingleBomb Function
        //Create Bomb and set random spawn location.
        //Bomb starts green => blue => yellow => orange => red => "expodes"
        //color change at 2000ms intervals
        //add click event listener.
            //click changes color back to previous state. If click on green, bomb destroyed.

    //Game Play
        //Instructions: Destroy all bombs
        //gameState = true
        //Start Timer.
        //Spawn 1 bomb per 5ms. End on timer.
        //Bomb explodes, gameState = False (Game Ends)
        //Timer Ends => playerScore ++
        //Round ++, Spawn targets ++
        //Repeat.


//Sorting Game


//Prize Redemption



};

