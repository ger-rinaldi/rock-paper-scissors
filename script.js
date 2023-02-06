/*  Algorithm

    get input from user
        when user clicks on choice/figure
        capture the the choice made
        send it to game
    game
        computer makes choice
        compare with choice of user
        get result of round
    show
        announce result of round
        show choices of user and computer
        refresh points of whole game
*/
// GAME VARIABLES - choices/weapon, state/result, points
const ROCK = "rock", PAPER = "paper", SCISSORS = "scissors";
const WIN = "won", LOST = "lose", TIE = "tie", CHOSEN = "chosen";
let playerPoints = 0;
let compPoints = 0;
// ELEMENTS of user and computer
// USER
const weaponsPlayer = document.querySelectorAll(".player-button");
const rockPlayer = weaponsPlayer[0];
const paperPlayer = weaponsPlayer[1];
const scissorsPlayer = weaponsPlayer[2];
// COMPUTER
const weaponsComp = document.querySelectorAll(".computer-button");
const rockComp = weaponsComp[0];
const paperComp = weaponsComp[1];
const scissorsComp = weaponsComp[2];
// Display elements
const displayPoints = document.querySelector(".points-display");
const displayPlayerChoice = document.querySelector(".player-choice");
const displayComputerChoice = document.querySelector(".computer-choice");
const displayOutcoome = document.querySelector(".winnermessage");
// add listeners to player weapon choices
rockPlayer.addEventListener('click', actionsOnPlayerChoice);
paperPlayer.addEventListener('click', actionsOnPlayerChoice);
scissorsPlayer.addEventListener('click', actionsOnPlayerChoice);
// FUNCTIONS
function actionsOnPlayerChoice(event) {
    // Variables
    const playerElement = event.currentTarget;
    const playerChoice = playerElement.classList[0];
    const compChoice = getComputerChoice();
    const computerElement = getComputerWeaponElement(compChoice);
    let result = "";

    clearPreviousChoice();
    //Modify Player Space
    changeWeaponState(playerElement, playerChoice);
    // Modify compupter Space
    changeWeaponState(computerElement, compChoice);
    
    // get the result, add points
    result = playRound(playerChoice, compChoice);
    if (result[0] === WIN) {playerPoints++;}
    else if (result[0] === LOST) { compPoints++; }
    
    // Modify choices and round result display
    actualizeOutcomeText(playerChoice, compChoice, result);
    changeWeaponState(displayPlayerChoice.lastElementChild, playerChoice, result[0]);
    changeWeaponState(displayComputerChoice.lastElementChild, compChoice, result[1]);
    // display the winner of match!
    let winner = (playerPoints > compPoints) ? " you!" : (compPoints > playerPoints) ? " the computer..." : "not yet"
    if (playerPoints === 5 || compPoints === 5)
    {
        displayPoints.textContent = `It's over! The winner is... ${winner}`;
        playerPoints = 0;
        compPoints = 0;
    }
}

function actualizeOutcomeText(playerChoice, compChoice, result) {
    displayPoints.textContent = `You are ${playerPoints} points - Computer is ${compPoints} points`;

    displayPlayerChoice.firstElementChild.textContent = `↓ Your choice is ${playerChoice}`;
    displayComputerChoice.firstElementChild.textContent = `↓ Computer choice is ${compChoice}`;

    if (result[0] === WIN) { displayOutcoome.textContent = "You've won this round!" ; }
    else if (result[0] === LOST) { displayOutcoome.textContent = "You've lost this round..." ; }
    else if (result[0] === TIE) { displayOutcoome.textContent = "It's a tie! " ; }
}

function changeWeaponState(element, weapon, state = CHOSEN) {
    let person = "player";
    if (element.classList[1] === "computer-button") { person = "computer"; }
    let src = `./images/${person}-${weapon}-${state}.png`;
    element.src = src;
}

function clearPreviousChoice() {
    weaponsPlayer.forEach((element) => changeWeaponState(element, element.classList[0], "neutral"))
    weaponsComp.forEach((element) => changeWeaponState(element, element.classList[0], "neutral"))
}

function getComputerWeaponElement(choice) {
    if (choice === ROCK) {return rockComp ;}
    if (choice === PAPER) {return paperComp ;}
    if (choice === SCISSORS) {return scissorsComp ;}
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 30) + 1;

    if (randomNumber > 0 && randomNumber <= 10) { return ROCK; }
    if (randomNumber > 10 && randomNumber <= 20) { return PAPER; }
    if (randomNumber > 20 && randomNumber <= 30) { return SCISSORS; }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { return [TIE, TIE]; }
    if (computerWins(playerSelection, computerSelection)) { return [LOST, WIN]; }
    return [WIN, LOST];

}

function computerWins(playerSelection, computerSelection) {
    if (computerSelection === ROCK && playerSelection === SCISSORS) { return true; }
    if (computerSelection === PAPER && playerSelection === ROCK) { return true; }
    if (computerSelection === SCISSORS && playerSelection === PAPER) { return true; }
    return false;
}