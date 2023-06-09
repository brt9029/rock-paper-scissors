let playerTotal = 0;
let computerTotal = 0;

function computerPlay() {
    let computerSelection = ["rock", "paper", "scissors"];

    return computerSelection[Math.floor(Math.random() * 3)];
}

const options = document.querySelector(`.options`);
// options.addEventListener('click', function(e){
//     console.log(e.target.textContent.toLowerCase());
// })
options.addEventListener('click', playRound)

const result = document.createElement('div');
const score = document.createElement('div');
const gameOver = document.createElement('div');

function playRound(e) {
    let playerSelection = e.target.textContent.toLowerCase();
    let computerSelection = computerPlay();

    let playerWin = "You Win! " + playerSelection + " beats " + computerSelection;

    let playerLose = "You Lose! " + computerSelection + " beats " + playerSelection;
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerTotal ++;
        result.textContent = playerWin;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerTotal ++;
        result.textContent = playerWin;
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerTotal ++;
        result.textContent = playerWin;
    }

    else if (playerSelection === computerSelection) {
        result.textContent = "It's a draw!";
    }

    else {
        computerTotal ++;
        result.textContent = playerLose;
    }
    options.appendChild(result);
    result.appendChild(score);
    score.textContent = "Player score: " + playerTotal + " Computer score: " + computerTotal;
    if (playerTotal == 5|| computerTotal == 5){
        checkWins(playerTotal, computerTotal);
        score.appendChild(gameOver);
    }
    
}

function checkWins(playerScore, computerScore) {
    if (playerScore > computerScore) {
        outcome = 'You won the best of 5!';
        playerTotal = 0;
        computerTotal = 0;
    } 

    else if (playerScore < computerScore) {
        outcome = 'The computer got the best of you this time...';
        playerTotal = 0;
        computerTotal = 0;
    }

    return gameOver.textContent = outcome;
}