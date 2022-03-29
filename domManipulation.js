/** Parent Node */
const parent = document.querySelector('.parentButton');


/** Child Node 1  */
const rockButton = document.createElement('button');
rockButton.classList.add('rockButton'); 
rockButton.textContent = 'Rock';
parent.appendChild(rockButton);


/** Child Node 2  */
const scissorskButton = document.createElement('button');
scissorskButton.classList.add('scissorskButton'); 
scissorskButton.textContent = 'Scissors';
parent.appendChild(scissorskButton);


/** Child Node 3   */
const paperButton = document.createElement('button');
paperButton.classList.add('paperButton'); 
paperButton.textContent = 'Paper';
parent.appendChild(paperButton);
