/** CONDITIONS
 * AND operator
 * Checking if the condition is true before we generate the certificate function 
let hasCompletedCourse = false
let givesCertificate = true
*/
/*
// a way to check this:
if(hasCompletedCourse === true){
    if(givesCertificate === true){
        generateCertificate()
    }
}
/**but this is too clumsy, so let's write it in a different way
if(hasCompletedCourse === true && givesCertificate === true){
    generateCertificate()
}*/
//here the expression as false, as we initiated hasCompletedCourse to false. If you change hasCompletedCourse to true
//then the condition is met and will generate the next function. So the both expressions needs to be
//true in orde to give true

let hasCompletedCourse = true
let givesCertificate = true

if(hasCompletedCourse === true && givesCertificate === true){
    generateCertificate()
} 

function generateCertificate() {
    console.log("Generating certificate....")
}

/**========================================================== */
let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if(hasSolvedChallenge === false && hasHintsLeft === false){
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}

/**OR Operator: if one of the conditions is not true, the response will be false */
// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
let likesDocumentaries = false
let likesStartups = true

if(likesDocumentaries ===true || likesStartups === true){
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
//Go back to index16.js