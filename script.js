/** Player 1 - Computer */
function computerPlay(){
    
    randomNum = Math.floor(Math.random() * 3) +1;
    
    if (randomNum == 1){
        computerSelection = "rock";
    } 
    else if (randomNum == 2){
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";    
    }
    
    return computerSelection;
}  
computerPlay();


/** Player 2 - Human */
playerSelection = prompt("Choose - Rock, Paper or Scissors").toLowerCase();



function playRound(playerSelection,computerSelection){
    
    /**Wins */
    if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats scissors!"
    }
    if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats rock!"
    }    
    if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats paper!"
    }    
    
    /**Looses */
    if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lost! Rock beats scissors!"
    }
    if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lost! Paper beats rock!"
    }    
    if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lost! Scissors beats paper!"
    }    
    
    /**Draw */
    else {
        return "It's a draw!"
    }
}



console.log(playRound(playerSelection,computerSelection));
