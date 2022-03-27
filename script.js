function computerPlay(){
    
    randomNum = Math.floor(Math.random() * 3) +1;
    
    if (randomNum == 1){
        randomHand = "Rock";
    } 
    else if (randomNum == 2){
        randomHand = "Paper";
    }
    else {
        randomHand = "Scissors";
    }
}

