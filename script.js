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