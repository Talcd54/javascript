/*
  * Now we need to make sure that when the user hits the save input button a lead is pushed 
  * to the my leads array
  * // Push the value "www.awesomelead.com" to myArray when the input button is clicked
  
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function() {
    
    myLeads.push("www.awesomelead.com")
    console.log(myLeads)

})*/

//with this nothing happens in the inputfield as I asked to put it in the array. Now, the more you
//click the button, the more this url is copied.
/**So now we're going to take wathever the user enters into the input field and push that value
 * into the myLeads array when he clickes on the button
  *

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")


inputBtn.addEventListener("click", function() {
     // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    //myLeads[0] = document.getElementById("input-el").value  --> mijn antwoord
    myLeads.push(inputEl.value)  //now you pushed the value you entered into the inputfield
    console.log(myLeads)

})
*/

/**Now we'll try to log out the response. let's start with an example how to loop over the array 


let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
// Log out the items in the myLeads array using a for loop
for(let i = 0; i<myLeads.length; i++){
    console.log(myLeads[i])
}
/*

/**
 * UNORDERED LIST
 * Next, we are going to transform this for loop from simply logging out the leads to actually rendering them out on the page.
 * However, in order to do that, we have to actually create that unordered list where we are to render the leads out.
 * So you are going to do that through a 2 part challenge: 
 * go to the html page '5-LeadTrackerAppand.html'and  add an unordered list
 * <!-- 1. Create an unordered list element (<ul>) with id="ul-el" -->
 * then come back to the javascript and 
 * 2. - grab the unordered list and store it in const variable called ulEl
 * So once we've done that we have set the stage for actually rendering the data out instead of just
 * logging it 
 * */

/**replace the console log with the rendered ul list */
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")

console.log(ulEl)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
}
