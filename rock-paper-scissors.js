
//
// Rock-Paper-Scissors
// This is part of the Odin Project JavaScript basics course. It aims to play a   game of Rock-Paper-Scissors in the console window. 
//

function getComputerChoice() {
    let computerChoice;
    let randComputerNumber = 3*Math.random(); 

    // Map the random number between 0 and 3 to each of the options of rock, paper, scissors

    if (randComputerNumber <= 1) {
        computerChoice = "ROCK";
    }
    else if (randComputerNumber <= 2) {
        computerChoice = "PAPER";
    }
    else {
        computerChoice = "SCISSORS"
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter one of the following: Rock, Paper, Scissors");
    
    humanChoice = humanChoice.toUpperCase();  // User input not case sensitive

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let outcome;

    // To keep track of score, we assign a value of 0 to outcome for lose, 1 for draw and 2 for win.

    if (humanChoice === "ROCK" && computerChoice === "ROCK") {
        console.log("It's a draw. Both players chose ROCK.")
        outcome++;
    }
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("You win! ROCK beats SCISSORS.")
        outcome=outcome+2;
    }
    else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        console.log("You lose. ROCK loses to PAPER.")
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        console.log("You lose. SCISSORS loses to ROCK.")
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "SCISSORS") {
        console.log("It's a draw. Both players chose SCISSORS.")
        outcome++;
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You win! SCISSORS beats PAPER.")
        outcome=outcome+2;
    }
    else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        console.log("You win! PAPER beats ROCK.")
        outcome=outcome+2;
    }
    else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        console.log("You lose. PAPER loses to SCISSORS.")
    }
    else if (humanChoice === "PAPER" && computerChoice === "PAPER") {
        console.log("It's a draw. Both players chose PAPER.")
        outcome++;
    }
    else {
        console.log("Your input was not correct. Please choose Rock, Paper, or Scissors.")
    }
    return outcome;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let drawScore = 0; 

    for (i=1; i<=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        outcome = playRound(humanSelection, computerSelection)
        if (outcome === 1) {
            drawScore++;
        }
        else if (outcome === 2) {
            humanScore++;
        }
        else if (outcome === 0) {
            computerScore++;
        }
    }

    console.log("Human Wins: " + humanScore);
    console.log("Computer Wins: " + computerScore);
    console.log("Draws: " + drawScore);

}





