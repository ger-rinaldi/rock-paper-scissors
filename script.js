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

