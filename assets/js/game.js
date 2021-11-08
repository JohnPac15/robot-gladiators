var playerName = window.prompt(" What is your robots name? ");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this console.log(playername, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames.length);
// for(var i =0;i< enemyNames.length; i++) {
//     console.log(enemyNames[i]) ;
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + " index ");
// }

//fight function
var fight = function(enemyName) {

    // Alert players that they are starting the round
    window.alert(" Welcome to Robot Gladiators! ");

    var promptFight = window.prompt(" Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or ' SKIP' to choose ")

    // if the player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtractiong the amount set in the playerAttack var


    
    
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
    
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyNames + " . " + enemyNames + " now has " + enemyHealth + " health remaining." 
            );
            

          
            
            
        
        //check enemy's health
            if (enemyHealth <=0) {
            window.alert( enemyNames  +  " has died ");
            }
            else { 
            window.alert(enemyNames + " still has " + enemyHealth + " health left " );
            }
        
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyNames + " attacked " + playerName + " . "+ playerName + " now has " + playerHealth + " health remaining "
            );
            
            //check p[layers health
            if (playerHealth <=0) {
                window.alert(playerName + " has died ")
            }
            
            else {
                window.alert(playerName + " still has " + playerHealth + " health left ");
            }
    }
    // if player cjoses to skip
    else if (promptFight === "skip" || promptFight === "SKIP") {
        
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit")

        // if yes (true), leave fight 
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye! ");

            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2
        }

        //if no (false), ask question again by funning fight() again
        else {
            fight();
        }
        
    }
    else {
        window.alert(" You need to try a vaild option. Tyr again! ")
    }
}
        
        
for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
