//@ts-nocheck
/** Blackjack game by Scrimba.com */
let player = {
    name: "chantal",
    chips: 200
}

let cards = []
let sum = 0
let count = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
let betEl = document.getElementById("bet-amount")
betEl.textContent = "Your bet: " + count


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if(count >=10){
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }else{  
        messageEl.textContent = "Please place your bet!"
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        if(cardsEl === true)
        {
            cardsEl.textContent += cards[i] + " " 
        }
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    console.log(message)
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}


function increaseBet(){
    count += 10
    betEl.textContent = "Your bet: " + count
    playerEl.textContent = player.name + ": $" + (player.chips - count)
}

function decreaseBet(){
    count -= 10
    betEl.textContent = "Your bet: " + count
    playerEl.textContent = player.name + ": $" + (player.chips - count)
}


function resetGame(){
    // Reset all variables
    cards = [];
    hasBlackJack = false;
    isAlive = false;
    message = "Game reset. Place your bets!";
    player.chips = 200; // Reset chips to initial value
    betEl.textContent = "Your bet: " + 0 // Reset bet
    playerEl.textContent = player.name + ": $" + player.chips; // Reset chips display
    cardsEl.textContent = "Cards: " + cards;
    sumEl.textContent = "Sum: " + 0;
    messageEl.textContent = message; // Display reset message
}