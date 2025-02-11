let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

/** Render the leads in the unordered list using ulEl.textContent
//so you are to replace the console.log with the rendering of each item into the unordered list
for (let i = 0; i < myLeads.length; i++) {
    //ulEl.textContent = myLeads[i]
    //this is how you would do this, but actually, here the textcontent will only be filled with the last
     * element in the array, and that's because each iteration in the for loop, you cleared out the entire text
     * and assigned it to whatever lead you were looking at that step in the iteration.
     * for a split second the title in the text was 'awsomelead' but that was replaced in the next loop 
     * with 'epiclead' and finalyy with 'greatlead'. So what we rather need to do is counting it up on
     * each run
     *
    ulEl.textContent += myLeads[i] + " "
}*/
/**Now wrap those leads up in list tags. Do that in the HTML, like this
 *             <li></li>
 * in JavaScript let's try it this way
 
for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += "<li>" + myLeads[i] + "</li>"
}
/**now you see that the html tags are rendered in the html page, and that is not what we want.
 * Therefore in javascript there's something called 'innerHTML'
 */
for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}
//now we have them as proper listitems with these bullets that are included on the default styling of list items.
//with this a whole new world has openend on how to manipulating the DOM. as JavaScript sees 'innerHTML' and than
//the list tags, it understands that he doesn't need to write these tags as a string, but rather incorporate them
//in the html page. And so you can create HTML with JavaScript

