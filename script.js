
function getComputerChoice(){
    let compChoice= Math.floor(Math.random() *3);    //Have the computer pick a random integer between 0-2 (3 possible values)
    //Each value has a differnt outcome  
    if(compChoice==0){                      //branch for Rock
            console.log("rock");
            return "rock";
    }
    else if(compChoice==1){                  //branch for Paper
            console.log("paper");
            return "paper";
    }
    else{                                   //branch for Scissors
            console.log("scissors");
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection, score){              //function to determine outcome of round, print outcome to console, and updte score
    if(playerSelection=="rock" && computerSelection=="paper"){
        console.log("You Lose! Paper beats Rock");                          
        return score-1;
    }
    else if(playerSelection=="rock"&& computerSelection=="scissors"){
        console.log("You Win! Rock beats Scissors");
        return score+1;
        
    }
    else if(playerSelection=="scissors"&& computerSelection=="paper"){
        console.log("You Win! Scissors beats Paper");
        return score+1;
    }
    else if(playerSelection=="scissors"&& computerSelection=="rock"){
        console.log("You Lose! Rock beats Scissors");
        return score-1;
    }
    else if(playerSelection=="paper"&& computerSelection=="scissors"){
        console.log("You Lose! Scissors beats Paper");
        return score-1;
    }
    else if(playerSelection=="paper"&& computerSelection=="rock"){
        console.log("You Win! Paper beats Rock");
        return score+1;
    }
    else{                           //If player and computer choose same option
        console.log("It's a draw!");
        return score;
    }

}
function game(){
    let score=0;                                                        //play a 5 round game
    for(let i= 0; i<5; i++){                                            //loop for playing multiple rounds, stopping after fifth round
        let userInput= prompt("Choose Rock, Paper, or Scissors");       //prompt player to choose option
        playerSelection= userInput.toLowerCase();                       //convert user input to lowercase to avoid case sensitivity
        
        while(true){                                                    //while loop to check for valid user input                                                
            if(playerSelection=="rock" || playerSelection=="paper"|| playerSelection=="scissors"){  //checks to see if playerSelection is valid
                break;                                                  //exit loop if player choice is valid
            }
            else{                                                       //branch for if player input is invalid
                let userInput= prompt("Invalid Input. Try again!\nChoose Rock, Paper, or Scissors");    //prompt player to try again and input a new option
                playerSelection= userInput.toLowerCase();                //convert user input to lowercase to avoid case sensitivity
            }
        }

        console.log(playerSelection);
        let computerSelection= getComputerChoice();
        score= playRound(playerSelection, computerSelection, score);
    }
    //compare if player has more round wins than computer
    if(score > 0){        //branch for positive score, meaning player had more wins                
        console.log("Congratualtions! You have won the game."); //Print winning message to console
    }
    else if(score < 0){  //branch for negtive score meaning computer has more wins
        console.log("You have lost the game.");                 //Print losing message to console
    }
    else{              //branch if score equals 0 meaning player and computer have tied
        console.log("We have tied!");                           //print tied message to console
    }
}



