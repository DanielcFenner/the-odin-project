const ROCK_BUTTON = document.querySelector(".rock");
const PAPER_BUTTON = document.querySelector(".paper");
const SCISSORS_BUTTON = document.querySelector(".scissors");
const COMPUTER_CHOICE_DISPLAY = document.querySelector(".computer-choice");
const PLAYER_CHOICE_DISPLAY = document.querySelector(".player-choice");
const PLAYER_SCORE = document.querySelector(".player-score");
const COMPUTER_SCORE = document.querySelector(".computer-score");
const BUTTONS = document.querySelectorAll(".buttons");
const MAIN_TEXT = document.querySelector(".main-text");
const SECONDARY_TEXT = document.querySelector(".secondary-text");
const BUTTONS_CONTAINER = document.querySelector(".buttons");
const RESET_BUTTON = document.querySelector(".reset");

let humanScore = 0;
let computerScore = 0;




function handleClick (e) {
    let humanChoice = e.target.className;
    let computerChoice = getComputerChoice();

    COMPUTER_CHOICE_DISPLAY.textContent = choiceToEmoji(computerChoice);
    PLAYER_CHOICE_DISPLAY.textContent = choiceToEmoji(humanChoice);

        if (humanChoice == computerChoice) {
            textUpdater("Draw!", "You both chose the same weapon.");
            return;
        }

        if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            textUpdater("You win!", `${humanChoice} beats ${computerChoice}!`);
            scoreUpdateDisplay();
        } else {
            computerScore++;
            textUpdater("You lose!", `${humanChoice} loses to ${computerChoice}!`);
            scoreUpdateDisplay();
        }

        if (humanScore === 5 || computerScore === 5) {
            if (humanScore === 5) {
                textUpdater("You win, GG!", `You beat the computer ${humanScore} - ${computerScore}`);
            } else {
                textUpdater("Better luck next time!", `You lost to the computer ${humanScore} - ${computerScore}`);
            }

            BUTTONS_CONTAINER.style.display = "none";
            RESET_BUTTON.style.display = "flex";
            
        }

        return;

}

function choiceToEmoji(choice) {
    if (choice === "rock") return "🪨";
    if (choice === "scissors") return "✂️";
    if (choice === "paper") return "📄";
}

function textUpdater(main, secondary) {
    MAIN_TEXT.textContent = main;
    SECONDARY_TEXT.textContent = secondary;
}

function scoreUpdateDisplay() {
        PLAYER_SCORE.textContent = `Score: ${humanScore}`
        COMPUTER_SCORE.textContent = `Score: ${computerScore}`
    
}

function resetGame() {
    textUpdater("Choose your weapon", "First to 5 wins the game");
    humanScore = 0;
    computerScore = 0;
    scoreUpdateDisplay();
    PLAYER_CHOICE_DISPLAY.textContent = "?";
    COMPUTER_CHOICE_DISPLAY.textContent = "?";
    BUTTONS_CONTAINER.style.display = "flex";
    RESET_BUTTON.style.display = "none";
}

RESET_BUTTON.addEventListener("click", resetGame);

BUTTONS.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", handleClick);
});


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) return "rock";
    if (randomNumber == 2) return "scissors";
    if (randomNumber == 3) return "paper";
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

// playGame();

