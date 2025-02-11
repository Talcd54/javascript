//@ts-nocheck
/*initialize the count as 0
listen for clicks on the cincrement button
increment the count variable when the button is clicked
change the count-el in the html to reflect the new count */
//1. Grab the save-el paragraph and store it in a variable called saveEl. Then go down to the function Save
let count = 0
let countEl = document.getElementById("count-el") //= h2  0
let saveEl = document.getElementById("save-el")  //= paragraaf Previous entries
let totalEl = document.getElementById("total-el") //=paragraaf total persons
let totalCount = 0


function increment(){
    count += 1
    //now we want to use the second part of the html tag 'innerText = 5'
    countEl.textContent = count
}

//congrats! this is your first interactive app!

// a lot of developers will talk about 'Working with the DOM'. what is this?
//DOM = Document object Model that is refering to document.getElementById("something"). 
//That's actually how you use javascript to modify a website
/*
Document = acutally the HTML document
Object = is the data type keyword of the html document, and this is an object. Meaning they have 
taken the HTML document and Shoved it into a JavaScript object
Model = is actually a modelation, like the real Saturn 5 rocket and the lego Saturn 5
So here the tag in html  <h2 id='count-el'>0</h2> is the real HTML tag element, then there is the JavaScript model
written as document.getElementById
*/

//let's use our memory and create a function, save(), which logs out the count when it's called
//go to indexTraining6.js for more information about strings. Because now we're going to add
//the numbers and some text under the buttons

/*
function save(){
    //2. Create a variable that contains both the count and the dash separation, i.e. "12 - "
    //3. REnder the variable in the saveEl using innerText
    //NB: Make sure to not delete the existing content of the paragraph
    let countStr = count + " - "
    saveEl.innerText += countStr
    
}
console.log(count)
*/

//we can see in the result that the space after the heffen is gone as well after the word 'previous'
/*let's use google to find out how to catch this. Let's find another tool that doesn't work this way. 
we use the object model innertext alterntive for this an let's search on innertext alternative mdn 
mdn = Mozilla Developer Network. on that page you can find Differences from innerText. If you scan this block of
information you'll understand that the html objects doesn't show hidden characters. Thus a space can be seen as a
hidden character. so what they propose is to change innerText into textContent. Let's try that
*/

/*
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    
}
*/
//and this works fine! 
/* Ok, final chapter: our count is incrementing continously everytime we click the button Save.
this is not what we want. The purpose when people come into the trainstation we want to start from zero
again and save that amount of people at that point. So we need to put the counter back on zero everytime we
click the Save button without loosing the notification of the amount. For this we only need 2 lines of code
*/

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr

    totalCount += count
    totalEl.textContent = "Total persons: " + totalCount
    countEl.textContent = 0
    //this alone will help to put the counter on zero temporarily but when you push the increment button again
    //you'll see that the counter continues on the last number it was incremented. This is because
    //javascript remembers what he needed to do earlier, and if you look all up to the top of this code
    //you'll see that we put the counter on 0 but it will increment in the first function to whatever we 
    //choose, and that is the number that javascript will remember. So, we also need to put the count back on
    //zero:
    count = 0


}

