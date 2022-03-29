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


/** One round of rock paper scissors */
function playRound(playerSelection,computerSelection){
  
    /**Wins */
    if (playerSelection == "rock" && computerSelection == "scissors"){
        result =("You win! Rock beats scissors!");
        console.log(result);
        
    }
    if (playerSelection == "paper" && computerSelection == "rock"){
        result =("You win! Paper beats rock!");
        console.log(result);
    }    
    if (playerSelection == "scissors" && computerSelection == "paper"){
        result =("You win! Scissors beats paper!");
        console.log(result);
    }    
    
    /**Looses */
    if (playerSelection == "scissors" && computerSelection == "rock"){
        result =("You lost! Rock beats scissors!");
        console.log(result);
    }
    if (playerSelection == "rock" && computerSelection == "paper"){
        result =("You lost! Paper beats rock!");
        console.log(result);
    }    
    if (playerSelection == "paper" && computerSelection == "scissors"){
        result =("You lost! Scissors beats paper!");
        console.log(result);
    }    
    
    /**Draw */
    else if ( playerSelection == computerSelection){
        result =("It's a draw!");
        console.log(result);
    }
    
    /**User input validation */
    else{
        result=("Your input was invalid. Please type rock,paper or scissors");
        console.log(result);
    }
}



/**Full game - Five round's of rock paper scissors */
function game(){
    
    let humanResult = 0;
    let computerResult = 0;
    let drawResult = 0;
    let invalidInputs =0;
    let winner = "noOne";
    
    for (let i = 0; i < 5; i++) {  
        
        /** Player 1 - Computer  */
        computerPlay();
        
        /** Player 2 - Human  */
       /**   playerSelection = prompt("Choose - Rock, Paper or Scissors").toLowerCase();  */
        
        playRound(playerSelection,computerSelection);
        
        if (result.substring(0,8) == "You win!"){
            ++humanResult;
        }
        if (result.substring(0,9) == "You lost!"){
            ++computerResult;
        }
        if (result == "It's a draw!"){
            ++drawResult;
        }
        if (result  == "Your input was invalid. Please type rock,paper or scissors"){
            ++invalidInputs;
            ++computerResult; /** Invalid inputs from the human result in points for the computer */
        }
        console.log(`The human chose ${playerSelection} and the computer chose ${computerSelection}`);
    }

    if (humanResult > computerResult){
        winner = "Human WON!";
    }
    else if (humanResult < computerResult){
        winner = "Computer WON!";
    }
    else{
        winner = "It's a draw!"
    }
    
    return `Result for the game is:
            Points for the human: ${humanResult}  
            Point for the computer: ${computerResult}\n 
            Draws were: ${drawResult}
            Invalid inputs from the human were: ${invalidInputs}\n
            The final result of the match is........................  ${winner}`;
}
    


/**----- DOM MANIPULATION AND EVENTS -----*/
/** Parent Node */
const parent = document.querySelector('.parent');



/** Child Node 1  */
const rockButton = document.createElement('button'); 
rockButton.classList.add('rockButton'); 
rockButton.textContent = 'Rock';
parent.appendChild(rockButton);


/** Child Node 2   */
const paperButton = document.createElement('button');
paperButton.classList.add('paperButton'); 
paperButton.textContent = 'Paper';
parent.appendChild(paperButton);



/** Child Node 3  */
const scissorskButton = document.createElement('button');
scissorskButton.classList.add('scissorsButton'); 
scissorskButton.textContent = 'Scissors';
parent.appendChild(scissorskButton);


const rockListener = document.querySelector('.rockButton');
rockListener.addEventListener('click',  function () {playRound("rock",computerSelection)});

const paperListener = document.querySelector('.paperButton');
paperListener.addEventListener('click',  function () {playRound("paper",computerSelection)});

const scissorsListener = document.querySelector('.scissorsButton');
scissorsListener.addEventListener('click',  function () {playRound("scissors",computerSelection)});

