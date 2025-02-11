//@ts-nocheck
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
let welcomeEl2 = document.getElementById("welcome-el2")
let name = "Chantal"
let greeting = "Welcome back "

welcomeEl2.innerText = greeting + name
// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

//welcomeEl.innerText = welcomeEl.innerText + "👋"    a simpler version of this will be
welcomeEl2.innerText += "👋👋"
