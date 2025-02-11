/**here we got 2 racers in the game with different timelaps. create a function that RETURNS
 * the fastest race time
 */
let player1Time = 102
let player2Time = 107

function getFastestRaceTime(){
    if(player1Time < player2Time){
        return player1Time
    }else if(player2Time < player1Time){
        return player2Time
    }else { //then the fastest time is anyplayers. So choose one
        return player1Time
    }
}

/*
let fastestRace = getFastestRaceTime()
console.log(fastestRace)
*/

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function totalRaceTime(){
    return player1Time + player2Time
}
let totalTime = totalRaceTime()
console.log(totalTime)

//tip: if you want to select and adapt multi lines at once select a word and press CTRL+d, for each same word
//you'll see that you will adapt different lines at once