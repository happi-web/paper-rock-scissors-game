//This game will be played between the computer and me
//So it will have three functions 
//1. The computer function
//2. The players function
//3. The round


let humanScore = 0
let computerScore = 0
/*
The computer function algorithm
1. Create a new function named getComputerChoice
2. Inside getComputerChoice create a variable called randomNumber and generate a ramdom number
3. Use the if else statement
4. If the number is less than 1/3, return "rock".
5. If the number is between 1/3 and 2/3, return "paper".
6. Otherwise, return "scissors".
7. Test the code by invoking the function using console.log
*/
function getComputerChoice(params) {
    let randomNumber = Math.random()
    if (randomNumber < 1/3) 
    {
        return "rock"
    } else if(randomNumber < 2/3) 
    {
        return "paper"
    }else
    {
        return "scissors"
    }
}
console.log(getComputerChoice())

/*
The players function algorithm
1. create a new function named getHumanChoice
2. use the prompt to get a choice from the user
3. Use the if else statement to compare the choice the user has given with the choices
and return the choices
4. Test on the console
*/

function getHumanChoice(params) {
    let choice = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase()
    if (choice === "rock")
    {
        return "rock"
    }else if (choice === "paper")
    {
        return "paper"
    }else
    {
        return "scissors"
    }
}

/*
The Single Round Logic
1. create a new function named playRound
2. define two parameters for playRound: humanChoice and computerChoice
3. convert humanChoice to lowecase
4. use if else statement for humanChoice and computerChoice
If humanChoice == "rock" and computerChoice == "scissors", 
or humanChoice == "scissors" and computerChoice == "paper", 
or humanChoice == "paper" and computerChoice == "rock", 
increment the humanScore, and log "You win! <humanChoice> beats <computerChoice>"
5 increament there scores
*/

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // Ensure input is lowercase
    computerChoice = computerChoice.toLowerCase(); // Ensure computer's choice is lowercase

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")
    ) {
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
    } else {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    }

    console.log(`Scores -> You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame(rounds) 
{
    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}`)
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice);
    }
    console.log("Game Over!")
    if (humanScore > computerScore)
    {
        console.log("Congratulations! You win the game.")
    }else if (computerScore > humanScore)
    {
        console.log("Computer Wins the game better luck next time")
    }else{
        console.log("It's a tie")
    }
    
}
playGame(5)