// 1* template strings/literals

const recipient = "James"
//const body = document.getElementById("body")

// Refactor the email string to use template strings
//const email = "Hey " + recipient + "! How is it going? Cheers Per"
const email = `
    Hey  ${recipient}! How is it going? Cheers Per `
console.log(email)


/**  Create a new variable, sender, and set its value to your name
*  Use your sender variable instead of "Per" */
const sender = "Chantal"
const email2 = `
Hey  ${recipient}! 
How is it going? 
Cheers ${sender}`
console.log(email2)
/**go back to the clicableLead and adapt the line based on this one */