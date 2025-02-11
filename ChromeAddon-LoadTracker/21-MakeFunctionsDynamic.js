const welcomeEl = document.getElementById("welcome-el")
//                 parameters are created on the inside of the function
function greetUser(greeting, name, emoji) {
    // Rewrite the expression using template literals
    //welcomeEl.textContent = greeting + ", " + name + " 👋"
    welcomeEl.textContent = ` ${greeting} , ${name} ${emoji}`
}
//         arguments: are created on the outside of the function
greetUser("Howdy", "James","🔥")
// Add the ability to choose the emoji as well!
/**Up to now we have used only strings. But you can add numbers also */
// Create a function, add(), that adds two numbers together and returns the sum

function add(num1, num2){
    return num1 + num2
}
//            
console.log( add(3, 4)    ) // should log 7
console.log( add(9, 102) ) // should log 111

// What are greeting and name? parameters
// What are "Howdy" and "James"? arguments
// What are num1 and num2? parameters
// What are 3 and 4? arguments
/**=========================================================== */
// Create a function, getFirst(arr), that returns the first item in the array

function getFirst(arr){
    return arr[0]
}
function getFirstNum(arr){
    return arr[1]
}

let first = ["firstCard", "secondCard", "thirdCard"]
let firstNum = [10, 5, 9]
// Call it with an array as an argument to verify that it works
console.log(getFirst(first))
console.log(getFirstNum(firstNum))

//Back to the leadtracker