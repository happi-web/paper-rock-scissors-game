let humanScore = 0;
let computerScore = 0;

// DOM elements
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");
const humanScoreSpan = document.querySelector("#human-score");
const computerScoreSpan = document.querySelector("#computer-score");
const resultSpan = document.querySelector("#result");
const resetButton = document.querySelector("#reset");

// Function to get a random computer choice
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Event listeners for human choices
paper.addEventListener("click", () => handleHumanChoice("paper"));
scissors.addEventListener("click", () => handleHumanChoice("scissors"));
rock.addEventListener("click", () => handleHumanChoice("rock"));


// Reset button functionality
resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
    resultSpan.textContent = "Game reset. Start playing!";
    document.querySelectorAll(".choice").forEach(button => {
        button.disabled = false;
    });
});

// Function to handle human choice and play a round
function handleHumanChoice(humanChoice) {
    const computerChoice = getComputerChoice(); // Generate a new computer choice
    playRound(humanChoice, computerChoice); // Play the round
    
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        resultSpan.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")
    ) {
        computerScore++;
        resultSpan.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`;
    } else {
        resultSpan.textContent = `It's a tie! You both chose ${humanChoice}`;
    }
    console.log(computerChoice);
    resultSpan.setAttribute("style", "color:blue; font-size:24px; background-color:white; padding:10px; border-radius:10px;");
    // Update scores
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    // Check for game winner
    if (humanScore === 5 || computerScore === 5) {
        const winnerMessage = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        resultSpan.textContent = winnerMessage;
        resultSpan.setAttribute("style", "color:blue; font-size:24px; background-color:white; padding:10px; border-radius:10px;")
        // Disable buttons after the game ends
        document.querySelectorAll(".choice").forEach(button => {
            button.disabled = true;
        });
    }
}
