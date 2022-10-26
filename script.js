
function getComputerChoice(){
    let compChoice= Math.floor(Math.random() *3);    //Have the computer pick a random integer between 0-2 (3 possible values)
    //Each value has a differnt outcome  
    if(compChoice==0){                      //branch for Rock
            console.log("rock");
            return "rock";
    }
    else if(compChoice==1){                          //branch for Paper
            console.log("paper");
            return "paper";
    }
    else{                         //branch for Scissors
            console.log("scissors");
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){              //function to determine outcome of round
    if(playerSelection=="rock" && computerSelection=="paper"){
        console.log("You Lose! Paper beats Rock");
    }
    else if(playerSelection=="rock"&& computerSelection=="scissors"){
        console.log("You Win! Rock beats Scissors");
    }
    else if(playerSelection=="scissors"&& computerSelection=="paper"){
        console.log("You Win! Scissors beats Paper");
    }
    else if(playerSelection=="scissors"&& computerSelection=="rock"){
        console.log("You Lose! Rock beats Scissors");
    }
    else if(playerSelection=="paper"&& computerSelection=="scissors"){
        console.log("You Lose! Scissors beats Paper");
    }
    else if(playerSelection=="paper"&& computerSelection=="rock"){
        console.log("You Win! Paper beats Rock");
    }
    else{                           //If player and computer choose same option
        console.log("It's a draw!");
    }

}
function game(){   
                       //Play a 5 round game
    for(let i= 0; i<1; i++){         //Loop for playing multiple rounds, stopping after fifth round
        let userInput= prompt("Choose Rock, Paper, or Scissors");
        playerSelection= userInput.toLowerCase();
        console.log(playerSelection);
        let computerSelection= getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}



