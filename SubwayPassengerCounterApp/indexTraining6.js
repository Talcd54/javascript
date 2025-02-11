let username = "chantal"
let message = "you have 3 new notifications"

let messageToUser = message + ', ' + username + "!"
console.log(messageToUser)

//create 2 variables, name and greeting, The name variable should store your name, and the 
//greeting should store e.g. "Hi, my name is "
//Create a third variable, my Greeting, that concatenates the two strings
//Log myGreeting to the console

let name = "Chantal"
let greeting = "Hi, my name is "
let myGreeting = console.log(greeting + name)

//let's mix it up a bit. if we would have put 42 instead of the name, what would happen?
//well, this also is seen as a string, although we meant a number
//javascript is going to concatenate the number as a string
let points = 4
let bonusPoints = "10"

let totalPoints = points + bonusPoints
console.log(totalPoints) //=410

//what do you think these would give as a result?
console.log(4 + 5) 
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")