
function getComputerChoice(){
    let compChoice= Math.floor(Math.random() *3);    //Have the computer pick a random integer between 0-2 (3 possible values)
    //Each value has a differnt outcome  
    if(compChoice==0){                      //branch for Rock
            console.log("rock");
    }
    else if(compChoice==1){                          //branch for Paper
            console.log("paper");
    }
    else{                         //branch for Scissors
            console.log("scissors");
    }
}

function playRound(playerSelection, computerSelction){
    if(playerSelection=="rock"&& computerSelction=="paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection=="rock"&& computerSelction=="scissors"){
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection=="scissors"&& computerSelction=="paper"){
        return "You Win! Scissors beats Paper";
    }
    else if(playerSelection=="scissor"&& computerSelction=="rock"){
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection=="paper"&& computerSelction=="scissor"){
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection=="paper"&& computerSelction=="rock"){
        return "You Win! Paper beats Rock";
    }
    else{
        return "It's a draw!"
    }

}
const playerSelection= "rock";
const computerSelction = getComputerChoice();
