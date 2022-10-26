
function getComputerChoice(){
    let compChoice= Math.floor(Math.random() *3);    //Have the computer pick a random number between 0-2 (3 possible values)
    //Each value has a differnt outcome  
    if(compChoice==0){                      //Case for Rock
            console.log("rock");
    }
    else if(compChoice==1){                          //Case for Paper
            console.log("paper");
    }
    else{                         //Case for Scissors
            console.log("scissors");
    }
}

