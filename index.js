let playerTotal = 0;
let computerTotal = 0;

function computerPlay() {
    let computerSelection = ["rock", "paper", "scissors"];

    return computerSelection[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let playerWin = "You Win! " + playerSelection + " beats " + computerSelection;

    let playerLose = "You Lose! " + computerSelection + " beats " + playerSelection;

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerTotal ++;
        return playerWin;
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerTotal ++;
        return playerWin;
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerTotal ++;
        return playerWin;
    }

    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }

    else {
        computerTotal ++;
        return playerLose;
    }
}

function checkWins(playerScore, computerScore) {
    let outcome = 'It\'s a tie game! Your score: ' + playerScore + ' Computer score: ' + computerScore;
    if (playerScore > computerScore) {
        outcome = 'You won the best of 5! Your score: ' + playerScore + ' Computer score: ' + computerScore;
        playerTotal = 0;
        computerTotal = 0;
    } 

    if (playerScore < computerScore) {
        outcome = 'The computer got the best of you this time...Your score: ' + playerScore + ' Computer score: ' + computerScore;
        playerTotal = 0;
        computerTotal = 0;
    }

    else {
        outcome = 'It\'s a tie game! Your score: ' + playerScore + ' Computer score: ' + computerScore;
        playerTotal = 0;
        computerTotal = 0;
    }

    return outcome;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('Select rock, paper, or scissors!').toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    return console.log(checkWins(playerTotal, playerTotal));
}