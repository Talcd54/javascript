let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//One more thing we need to add. As you play online poker you'll usually see your credentials and credits
//let's add a tag in the HTML in a paragraph with an id called player-el and fill it up here
//let playerName = "Chantal"
//let playerChips = 200

//let playerEl = document.getElementById("player-el")
//playerEl.textContent = playerName + ": $" + playerChips

/** this is a beautifull example, however, now we com in a situation where 2 values that are inherently connected
 * together, like the player and the chips, which currently live in 2 different variables.
 * What would make more sence would be to somehow combine this into a single unity. That's where the so called
 * OBJECTS com in to play. another data type which resembles arrays a little bit, but they are also different in
 * some fundamental ways. But they are also a kind of buckets where you store data. 
 * So in our case we could create a player object in which we can store these 2 values: 
*/
/*
let player = {
    let playerName = "Chantal"
    let playerChips = 200
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = playerName + ": $" + playerChips    
*/

/**you can see that something is wrong here, because of the red lines. That's because the syntax for creating
 * items inside of our object is different from how we define variables. 
 * First of all we don't need to use the let keyword in front of the names, and secondly we replace the 
 * assignement with colon, and third we seperate the items with a colon. And last we can omit the same word
 * "player" as we use this in the variable already
 * now we have taken our 2 variables and group them together in this little bucket which we're calling player
 * and the way we can refer to this value is by using  first the objectname and then give it a key
*/

let player = {
    name: "Chantal",
    chips: 200
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

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
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
