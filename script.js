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
function singleRound () {
    getComputerChoice();
    let playerSelection = prompt("Enter Rock, Paper or Scissors: ");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a Draw! You both picked Rock";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It's a Draw! You both picked Paper";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose! Rock beats Scissors";
    }
    else {
        return "It's a Draw! You both picked Scissors";
    }
}

function game () {
    
}