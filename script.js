// Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
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

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// function calcScore() {
//     if (playerScore > computerScore) {
//         console.log(`You won ${playerScore} rounds. The Computer won ${computerScore}. Congrats, you won!`);
//     }
//     else if (playerScore < computerScore) {
//         console.log(`You won ${playerScore} rounds. The Computer won ${computerScore}. You lost, better luck next time!`);
//     }
//     else {
//         console.log("Something must have gone wrong");
//     }
// }

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
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        resultsDiv.textContent = `You picked ${playerSelection}, the Computer picked ${computerSelection}.\nYou Lose! Rock beats Scissors`;
        // resultsDiv.textContent = "You Lose! Rock beats Scissors";
        computerScore = ++computerScore;
    }
    else {
        resultsDiv.textContent = `You picked ${playerSelection}, the Computer picked ${computerSelection}.\nIt's a Draw! You both picked Scissors`;
    }
}

// function game () {
//     for (let gamesPlayed = 1; (playerScore < 3 && computerScore < 3); gamesPlayed ++) {//(playerScore < 3 && computerScore < 3) Game ends when someone wins3rounds
//         playRound();
//     }
//     if (playerScore > computerScore) {
//         console.log(`You won ${playerScore} rounds. The Computer won ${computerScore}. Congrats, you won!`);
//     }
//     else if (playerScore < computerScore) {
//         console.log(`You won ${playerScore} rounds. The Computer won ${computerScore}. You lost, better luck next time!`);
//     }
//     else {
//         console.log("Something must have gone wrong");
//     }
// }

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const resultsDiv = document.querySelector('#results')
rockBtn.addEventListener('click', () => {
    playerSelection='rock';
    playRound();
});
paperBtn.addEventListener('click', () => {
    playerSelection='paper';
    playRound();
});
scissorsBtn.addEventListener('click', () => {
    playerSelection='scissors';
    playRound();
});

