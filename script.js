
function getcomputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    
    if (choice === 0) {
        return "rock"
    }

    else if (choice === 1) {
        return "paper"
    }

    else if (choice === 2) {
        return "scissors"
    }

}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase()

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("please select a valid option").toLowerCase()

    }

    return choice.toLowerCase()
}



function playGame() {
    let humanScore = 0
    let computerScore = 0
    let ties = 0

    function playRound(humanChoice, ComputerChoice) {
        if (
            humanChoice == "rock" && ComputerChoice == "scissors" || 
            humanChoice === "paper" && ComputerChoice === "rock" || 
            humanChoice === "scissors" && ComputerChoice === "paper") 
            {
            humanScore ++
            console.log(`${humanChoice} beats ${ComputerChoice}, You win!`)
        }
    
        else if(humanChoice === ComputerChoice) {
            ties ++
            console.log(`A tie! You both have: ${humanChoice}`)
    
        }
        
        else{
            computerScore ++
            console.log(` ${ComputerChoice} beats ${humanChoice}, You lose!`)
        }
    }
  
    for (let i = 0; i <= 4; i++) {       
        playRound(getHumanChoice(), getcomputerChoice())
        
    }

    if (humanScore++) {
        console.log(`You win! Your score is: ${humanScore},  computer score is: ${computerScore}`);
    }

    else if (computerScore++) {
        console.log(`You lose! Your score is: ${humanScore}, computer score is: ${computerScore}`);
    }

    else if (humanChoice == computerChoice) {
        console.log(`Draw! You both have the score of: ${humanScore}`)
    }
    
}

playGame(5);