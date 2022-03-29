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


function playRound(playerSelection,computerSelection){
    
    let humanResult = 0;
    let computerResult = 0;
    let drawResult = 0;
    let winner = "";
    
    let divResult = document.createElement('div');
    parent.appendChild(divResult);
   
    
    /**Wins */
    if (playerSelection == "rock" && computerSelection == "scissors"){
        result =("You win! Rock beats scissors!");
        divResult.textContent = result;
        ++humanResult;
    }
    if (playerSelection == "paper" && computerSelection == "rock"){
        result =("You win! Paper beats rock!");
        divResult.textContent = result;
        ++humanResult;
    }    
    if (playerSelection == "scissors" && computerSelection == "paper"){
        result =("You win! Scissors beats paper!");
        divResult.textContent = result;
        ++humanResult;
    }    
    
    /**Looses */
    if (playerSelection == "scissors" && computerSelection == "rock"){
        result =("You lost! Rock beats scissors!");
        divResult.textContent = result;
        ++computerResult;
    }
    if (playerSelection == "rock" && computerSelection == "paper"){
        result =("You lost! Paper beats rock!");
        divResult.textContent = result;
        ++computerResult;
    }    
    if (playerSelection == "paper" && computerSelection == "scissors"){
        result =("You lost! Scissors beats paper!");
        divResult.textContent = result;
        ++computerResult;
    }    
    
    /**Draw */
    else if ( playerSelection == computerSelection){
        result =("It's a draw!");
        divResult.textContent = result;
        ++drawResult;
    }
   
    let divRunningScore = document.createElement('div');
    parent.appendChild(divRunningScore);
    divRunningScore.textContent = `Human points : ${humanResult} - ${computerResult} : Computer points `;
}
/** broene na running score i loop nqkakuv - razlichni rezultati vseki rund  */



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


const computerListener = document.querySelector('.rockButton , .paperButton , .scissorsButton');
computerListener.addEventListener('click',  function () {computerPlay()});
/** computerPlay clicking is not working with paper and scissors buttons*/


