function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3 + 1);
    if (computerSelection === 1) {
        computerSelection = 'rock';
    }
    else if (computerSelection === 2) {
        computerSelection = 'paper';
    }
    else {
        computerSelection = 'scissors';
    }
    return computerSelection;
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;

function playRound () {
    getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        alert("Please restart the game and pick Rock, Paper or Scissors");
        getComputerChoice();
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        resultsDiv.textContent = `You picked ${playerSelection}, the Computer picked ${computerSelection}.\nYou Win! Rock beats Scissors`;
        // resultsDiv.textContent = "You Win! Rock beats Scissors";
        playerScore = ++playerScore;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        resultsDiv.textContent = `You picked ${playerSelection}, the Computer picked ${computerSelection}.\nYou Lose! Paper beats Rock`;
        // resultsDiv.textContent = "You Lose! Paper beats Rock";
        computerScore = ++computerScore;
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock') {
        resultsDiv.textContent = `You picked ${playerSelection}, the Computer picked ${computerSelection}.\nIt's a Draw! You both picked Rock`;
        // resultsDiv.textContent = "It's a Draw! You both picked Rock";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        resultsDiv.textContent = `You picked ${playerSelection}, the Computer picked ${computerSelection}.\nYou Win! Paper beats Rock`;
        // resultsDiv.textContent = "You Win! Paper beats Rock";
        playerScore = ++playerScore;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        resultsDiv.textContent = `You picked ${playerSelection}, the Computer picked ${computerSelection}.\nYou Lose! Scissors beats Paper`;
        // resultsDiv.textContent = "You Lose! Scissors beats Paper";
        computerScore = ++computerScore;
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        resultsDiv.textContent = `You picked ${playerSelection}, the Computer picked ${computerSelection}.\nIt's a Draw! You both picked Paper`;
        // resultsDiv.textContent = "It's a Draw! You both picked Paper";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        resultsDiv.textContent = `You picked ${playerSelection}, the Computer picked ${computerSelection}.\nYou Win! Scissors beats Paper`;
        // resultsDiv.textContent = "You Win! Scissors beats Paper";
        playerScore = ++playerScore;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        resultsDiv.textContent = `You picked ${playerSelection}, the Computer picked ${computerSelection}.\nYou Lose! Rock beats Scissors`;
        // resultsDiv.textContent = "You Lose! Rock beats Scissors";
        computerScore = ++computerScore;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        resultsDiv.textContent = `You picked ${playerSelection}, the Computer picked ${computerSelection}.\nIt's a Draw! You both picked Scissors`;
    }
    scoreDisplay();
}

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const resultsDiv = document.querySelector('#results');

rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound();
});
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound();
});
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound();
});

const scoreBox = document.querySelector('#scoreBox');
const runningScore = document.createElement('div');
scoreBox.appendChild(runningScore);

function scoreDisplay() {
    runningScore.textContent = `${playerScore} - ${computerScore}`;
    if (playerScore === 5 && playerScore > computerScore) {
        runningScore.textContent = `${playerScore} - ${computerScore}`;
        gameover();
    }
    
    else if (computerScore === 5 && computerScore > playerScore) {
        runningScore.textContent = `${playerScore} - ${computerScore}`;
        gameover();
    }
}

function gameover() {
    const gameReset = document.createElement('div');
    scoreBox.appendChild(gameReset);
    if (playerScore > computerScore) {
        gameReset.textContent = `Congrats! You win ${playerScore}-${computerScore}!`;
    }
    else {
        gameReset.textContent = `Ouch! You lose ${playerScore}-${computerScore}!`;
    }
    playerScore === 0;
    computerScore === 0;
}