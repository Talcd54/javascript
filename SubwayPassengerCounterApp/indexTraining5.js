/*
//create a function (you decide the name) that logs out the number 42 to the console
//call/invoke the function
function showNumber(){
    console.log(42)
}
showNumber()

//back to our game. Our races will do a certain laps, and we want to trace through the laps.
we have 3 lap times in the variables
let lap1 = 34
let lap2 = 33
let lap3 = 36


//create a function that logs out the sum of all the lap times
function totalLaps(){
    let count = lap1 + lap2 + lap3
    console.log(count)
}
//invoke
totalLaps()


// what you don't can do here is call upon the totallaptim with the console.log outside the function.
//you'll get an error message that count is not defined

//let's go a step further: let's check how many laps the racer has completed
//create a function taht increments the lapsCompleted variable with one
//run it 3 times
let lapsCompleted = 0
function incrementLap(){
    lapsCompleted = lapsCompleted + 1   //lapsCompleted += 1
}
incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)
//now go back to index.js
*/