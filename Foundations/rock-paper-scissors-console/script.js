function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) return "rock";
    if (randomNumber == 2) return "scissors";
    if (randomNumber == 3) return "paper";
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        console.log("You chose " + humanChoice + ". Computer chose " + computerChoice + ".");
        if (humanChoice == computerChoice) {
            console.log("Draw!")
            return;
        }

        if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
        } else {
            computerScore++;
            console.log("You lose! " + humanChoice + " loses to " + computerChoice + "!");
        }

        return;
    }
    for (let i = 1; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
        console.log("Current score: " + humanScore + "-" + computerScore)
    }


}

playGame();

