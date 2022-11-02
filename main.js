console.log('Hello');

const options = ['rock', 'paper', 'scissors'];

// function to get computers choice
function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
} 

// function to check the winner
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 'Tie';
    }else if(
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ){
        return 'Player';
    }else {
        return 'Computer';
    }
}

// function to play a single round
function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == 'Tie'){
        return `It's a tie! ${playerSelection} vs ${computerSelection}`;
    }else if(result == 'Player'){
        return `Player won! ${playerSelection} beats ${computerSelection}`;
    }else {
        return `Computer won! ${computerSelection} beats ${playerSelection}`;
    }
}

// get player choice using prompt

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt('Rock Paper Scissors');
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

// play a 5 round game using loop
function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log('Welcome');
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('-----------------');
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            playerScore++;
        }else if(checkWinner(playerSelection, computerSelection) == 'Computer'){
            computerScore++;
        }
    }
    console.log('Game Over');
    if(playerScore > computerScore){
        console.log('Player won!')
    }else if(computerScore > playerScore){
        console.log('Computer won!')
    }else {
        'It\'s a tie!';
    }
}
game();