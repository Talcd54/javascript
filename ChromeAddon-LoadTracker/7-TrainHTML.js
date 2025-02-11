/**Let's pretend your  colleague developer has forgotten the by button in the div container of the html, this will upset 
 * the client of course as the user won't be able to purchase the goods! so you as a javascript developer have to do
 * that instead. 
 * so you're going to use the dot inner HTML to render out a buy button inside of the div container.
 * You have to grab a hold on the div container first, an d then use the inner html. And the text inside of the button
 * should be 'Buy!'
 */
// Use .innerHTML to render a Buy! button inside the div container
let divCon = document.getElementById("container")

//divCon.innerHTML = "<button>Buy!</button>"

/**Ok let's continue with our e-commerce website:
 * 
// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
I'm going to try to help you a bit by creating an onclick event in the button that invokes a function called
by when the button is clicked. So your job is then to create that buy function to be ready to listen
 */
divCon.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy(){
    //console.log("Thank you for buying!")
    divCon.innerHTML += "<p>Thank you for buying!</p>"
}
/**without the += you will delete the button, as in that case the function will only add what you gave him
 * between " " and delete the original element given in the let variable. if you use the plus isEqual, you
 * will add the extra html tag to the page.
 * Ok, let's go back to the LeadTracker 8-....
 */
