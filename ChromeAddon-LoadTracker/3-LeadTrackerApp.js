/**Now we need to setup the infrastructure to save the leads that we put in our textbox/input field.
 * For that we need two variables
 * 
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
 

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("You succeded to click me!")
}) */


let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
 /**What I'm gonne do is swap the 'let' with const. Why am I doing that? 
  * that is because in modern JavaScript developers use both let and const to declare a variables. So it's time
  * to learn about both of these methods.
  * Now the main difference between const and let is that const cannot be reassigned. And the name kind of
  * hints to that. It is short for constant. So if you put an element in there, you cannot reassign it.
  * e.g. might I choose to declare:
  * inputEl = "Hello!"   this won't work. An error message tells you 'Assignement to constant variable.' I try to assign
  * 'Hello' to the variable inputEl, but at that point Javascripts says 'no no, you can't do that!'
  * Now, why would we do this as this would gives us less freedom to code?
  * Good question, go to the next cast and we'll dig into this. Go to '4-constvsLet.js'
 */
