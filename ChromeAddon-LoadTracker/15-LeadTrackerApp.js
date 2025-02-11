let myLeads = `["www.awesomelead.com"]`
myLeads = JSON.parse(myLeads)  //when we want to push urls in there
myLeads.push("www.epicLead.com")
console.log(myLeads) //yes, this works!  what if we want to go the other way arround?

myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)
/**so by using the JSON methods, the stringify and parse, and passing in our data we can flip back and 
 * forth between strings and arrays. And obviously, if we used a JSON object with the curly brackets, it
 * would turn it into javaScript object and the other way arround
 * Now go to 16-
  */



//let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//                   Key               Value
//localStorage.setItem("myLeads", "www.LinkedIn.com") //if you run this code, nothing seems to have happened
//but if you actually delete this line and rerun the browser and console log this out
//console.log(localStorage.getItem("myLeads")) //and refresh the browser, this value is still there!

//Exercise:
// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings
//localStorage.setItem("Hello, you were saved!", "www.google.com")
//console.log(localStorage.getItem("Hello, you were saved!"))
//console.log(localStorage.clear())  let's use this with our array to learn that
//to help your self find it on google in Stackoverflow. use the query 'how do I store an array in localStorage?
//apparently by using JSON.parse() instead of the array notation. so 
//from array to string: localStorage.setItem("names", JSON.stringify(names))
//from string to array: JSON.parse(localStorage.getItem("names"))
//let's try this. change the array

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
            listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                    </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
