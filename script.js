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


let humanResult = 0;
let computerResult = 0;


function playRound(playerSelection,computerSelection){
    
    /**Wins */
    if (playerSelection == "rock" && computerSelection == "scissors"){
        result =("You win! Rock beats scissors!");
        ++humanResult;
    }
    if (playerSelection == "paper" && computerSelection == "rock"){
        result =("You win! Paper beats rock!");
        ++humanResult;
    }    
    if (playerSelection == "scissors" && computerSelection == "paper"){
        result =("You win! Scissors beats paper!");
        ++humanResult;
    }    
    
    /**Looses */
    if (playerSelection == "scissors" && computerSelection == "rock"){
        result =("You lost! Rock beats scissors!");
        ++computerResult;
    }
    if (playerSelection == "rock" && computerSelection == "paper"){
        result =("You lost! Paper beats rock!");
        ++computerResult;
    }    
    if (playerSelection == "paper" && computerSelection == "scissors"){
        result =("You lost! Scissors beats paper!");
        ++computerResult;
    }    
    
    /**Draw */
    else if ( playerSelection == computerSelection){
        result =("It's a draw!");
    }
    
    txtResults(); 

    setTimeout(() => { winner() }, 900);
}



function txtResults(){

    let divResult = document.createElement('div');
    parent.appendChild(divResult);
    divResult.textContent = result;
    
    let divRunningScore = document.createElement('div');
    parent.appendChild(divRunningScore);
    divRunningScore.textContent = `Human  ${humanResult} vs. ${computerResult}  Computer`;

    let line = document.createElement('div');
    parent.appendChild(line);
    line.textContent = `------------------------------------`;
}



function winner(){
    if (humanResult >= 5){
        alert(`Human WON!\nHuman  ${humanResult} vs. ${computerResult}  Computer`);
        humanResult= 0;
        computerResult= 0;
    }
    else if (computerResult >= 5){
        alert(`Computer WON!\nHuman  ${humanResult} vs. ${computerResult}  Computer`);
        humanResult= 0;
        computerResult= 0;
    }
}



/**----- DOM MANIPULATION AND EVENTS -----*/
/** Parent Node */
const parent = document.querySelector('.parent');

const title = document.createElement('p');
title.classList.add('title'); 
title.textContent = 'First player with 5 points WINS!';
parent.appendChild(title);


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


const computerListener = document.querySelectorAll('button');
computerListener.forEach(btn => {
    btn.addEventListener('click', function (){computerPlay()});
 });

