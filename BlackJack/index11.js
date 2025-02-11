// 2. Use getRandomCard() to set the values of firstCard and secondCard
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el") //want to play?
let sumEl = document.getElementById("sum-el")  //Sum
let cardsEl = document.getElementById("cards-el") //cards

//ok, it's time to learn your valeus about returning values and functions and implement that technique into our app
// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard(){ //function declarations. these are used to gets so called hoisted to the top,meaning 
    //that it is accessible even at line 1, regardless on how far you define the function. We've could have written
    //this at line 1 thousand, it still would have been accessible on line 1. Now there are other ways of creating
    //functions, that don't give the function extra benefit, but as for now we'll use it this way.
    return 5
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // 1. Create a for loop that renders out all the cards instead of just two
    for(i=0; i < cards.length; i++){
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
    // 3. Use the getRandomCard() to set the value of card
    let card = getRandomCard()
    //let card = getRandomCard()
    sum += card
    // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()
}
