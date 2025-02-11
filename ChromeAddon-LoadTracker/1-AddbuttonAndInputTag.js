// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

/*
function clickButton(){
    console.log("button clicked from onclick attribute")
}*/

//in modern world you'll see developers notate this differently. 
//So I'll show you how this is written as a pro:

//use the variable of the button, add an event listner that is going to check wether or not you are clicking
//on something, say which type of event the code needs to listen to. Here it is a 'click' and then
//add the function where you want something to happen.
inputBtn.addEventListener("click", function(){
    console.log("Button clicked from addEventListner")
})
//whith this code above, you can now clean a part of the html. Meaning you can deleten the 'onclick' event
//in the html tag in the button. This is a cleaner separation of concerns where the html doesn't worry about
//any event listeners as that is all gathered in the javascript. but than you also should remove
//the clickButton function