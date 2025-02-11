let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// 1. Make this function return a random number between 1 and 13
// 2. change the values of the pictured cards and the ace
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    
    let randomNumber = Math.floor(Math.random() * 13 ) + 1 //this should return a number between 1 and 13
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }
}

/** Now we need to change our getRandomCard() function because in BlackJack the jack, lady and King is worth
 * 10 and the ace is worth 11. Stricly speaking the ace can be worth both 1 and 11, you get to choose as a player
 * what suits you best is the value you use. For the sake of simplicity we're going to treat the ace as 11
 */
function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
