// These variables are global, so different functions can access them whithout need to re-declare them
// Theres no need for them to be altered so are constant
const rock = "rock", paper = "paper", scissors = "scissors";

// get the "choice" of the computer from a random number
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    let computerChoice = "";

    switch (randomNumber) {
        case 1:
        case 2:
        case 3:
            computerChoice = rock;
            break;
        case 4:
        case 5:
        case 6:
            computerChoice = paper;
            break;
        case 7:
        case 8:
        case 9:
            computerChoice = scissors;
            break;
        default:
            computerChoice = null;
            break;
    }

    return computerChoice;
}

function getPlayerChoice() {
    let playerSelection = null;
    do {
        playerSelection = prompt("Choose: \nRock \nPaper \nScissors")
        playerSelection = playerSelection.toLowerCase()
        if (validPlayerSelection(playerSelection)) { return playerSelection; }
        else { alert("Invalid anser, please select one of the given choices."); }

    } while (true);
}

function validPlayerSelection(playerSelection) {
    if (playerSelection === rock) return true;
    if (playerSelection === paper) return true;
    if (playerSelection === scissors) return true;
    return false;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { return "It's a tie!"; }
    if (computerWins(playerSelection, computerSelection)) { return `You lose! ${computerSelection} beats ${playerSelection}`; }
    return `You win! ${playerSelection} beats ${computerSelection}`;

}

function computerWins(playerSelection, computerSelection) {
    if (computerSelection === rock && playerSelection === scissors) { return true; }
    if (computerSelection === paper && playerSelection === rock) { return true; }
    if (computerSelection === scissors && playerSelection === paper) { return true; }
    return false;
}

function game() {
    const roundsToPlay = 5, minWinsRequired = Math.ceil(roundsToPlay / 2);
    let playerVictories = 0, computerVictories = 0;
    let roundCurrent = 1;

    while (roundCurrent <= roundsToPlay && (playerVictories < minWinsRequired && computerVictories < minWinsRequired)) {

        alert(`Rounds to be played: ${roundsToPlay}\n
                Current round: ${roundCurrent}\n
                Player: ${playerVictories}\n
                Computer: ${computerVictories}`)

        let roundResult = playRound(getPlayerChoice(), getComputerChoice());

        alert(roundResult);
        
        playerVictories += (roundResult.slice(4, 7) === "win") ? 1 : 0;
        computerVictories += (roundResult.slice(4, 7) === "los") ? 1 : 0;
        roundCurrent++;

    }

    alert(gameWinner(playerVictories, computerVictories));

}

function gameWinner(playerVictories, computerVictories) {
    if (playerVictories > computerVictories) {
        return "You have won!"
    } else {
        return "The computer has won..."
    }
}
game();