




//Main Game Menu
    //Get playerName
    //Set playerScore to 0


//Shooting Game
    //Create Timer
        //30000ms per round

    //Create Target Destroyed Counter

    //spawnSingleTarget Function
        //Create target & set random spawn Location
        //Set to despawn after x seconds
        //Add click eventlistener function
            //Despawns (Destroyed) on click
            //Target Destroyed Counter ++

    //Game Play
        //Instructions: click 90% to proceed.
        //gameState = true
        //Reset Target Destroyed Counter.
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

