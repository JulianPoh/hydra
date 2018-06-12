window.onload = function(){


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
            //Target Spawn XY Coordinates
            var x = Math.floor(Math.random() * (780 - 20 + 1)) + 10;
            var y = Math.floor(Math.random() * (580- 20 + 1)) + 10;
            //Spawn Target Function
            function spawnTarget() {
                target= gameCanvas.getContext('2d');
                target.clearRect(0,0, 800,600);
                target.beginPath();
                target.fillStyle="red";
                // Draws a circle of radius 20 at the coordinates x,y on the canvas
                target.arc(x,y,20,0,Math.PI*2,true);
                target.closePath();
                target.fill();
                target.addEventListener('click', function(event) {
                // Collision detection between clicked offset and element.
                targetDetection.forEach(function(target) {
                if (y > element.top && y < element.top + element.height 
                && x > element.left && x < element.left + element.width) {
                
                alert('clicked an element');
                }
            });
        })
    }  
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
        var thirtySecs = 30,
            display = document.querySelector("#time");
        startTimer(thirtySecs, display);
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