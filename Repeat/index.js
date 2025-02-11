//@ts-nocheck
/* Exercise 1
Create 2 variables, firstName and lastName
concatenate the 2 variables into a third variable called fullName
Log fullName to the console*/
let firstName = "Chantal"
let lastName = "Decraie"
let fullName = firstName + " " + lastName
console.log(fullName)

/* Exercise 2
let name = "Linda" 
let greeting = "Hi there"

Create a function taht logs out "Hi there, Linda!" when called
*/
// @ts-ignore
let name = "Linda" 
let greeting = "Hi there"
/*
function greetings(){
    let greet = greeting + ", " + name + "!"
    console.log(greet)
}*/
//vereenvoudigd
function greetings(){
    console.log(greeting + ", " + name + "!")
}
greetings()

/* Exercise 3
Create 2 functions, add3Points() and remove1Point(), and have them add/remove points to/from the myPoints variabele. 
Call the functions up to that the line below logs out 10
*/
let myPoints = 3
function add3Points(){
    myPoints += 3
}

function remove1Point(){
    myPoints -= 1 
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints)

/** Try to predict what each of the lines will log out*/
console.log("2" + 2) //22
console.log(11 + 7) //18
console.log(6 + "5") //65
console.log("My points: " + 5 + 9) //24 --> wrong, it is   My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") //1114