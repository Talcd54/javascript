let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

/**there's one more thing we  need to do. As we enter the casino. I didn't already played anything, so as it it now
 * there cannot be already cards arrays or even an isAlive is true.It would be that the casino already decided
 * what cards I am to be dealt. This is fishy
 * we want the cards been generating as we click the button
 * so the firstCard and secondCard should been generated inside the startGame()
 * and thus the cards and the sum should also be in there. Furthermore the isAlive shouldn't be set on true
 * by default before I even clicked the start game button, so we need to change this in false and
 * instantiate it to true within this method
 */

console.log(cards)  //let's check if the casino is honest, there shouldn't be anything in there
function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    // Generate two random numbers
    // Re-assign the cards and sum variables so that the game can start
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
