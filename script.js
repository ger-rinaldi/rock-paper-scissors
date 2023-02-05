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

// Get the img element that player uses to make choice --> div.player > div > img.rock/paper/scissors
const choicesOfPlayer = Array.from(document.querySelector(".player").children);
const playerRock = choicesOfPlayer[0].lastElementChild
const playerPaper = choicesOfPlayer[1].lastElementChild
const playerScissors = choicesOfPlayer[2].lastElementChild

// FUNCTIONS



// main

choicesOfPlayer.forEach((element) => {
    element.lastElementChild.addEventListener('click', actionsThatUsePlayersChoice)
})

