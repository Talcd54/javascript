let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

/**Replace .textContent with .innerHTML and use <li> tags
for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i] + " "
}
    */

/*
for (let i = 0; i < myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}*/
/**Now that you've learned how to use this innerHTML, I'm gonne be a bit enoying and learn you
 * how to use an alternative way of solving this that doesn't use innerHTML. Because dispite the 
 * fact that we are learning you how to do this, it makes sense that you, as a beginner, learns 
 * to do this in different ways for you to choose yourself what feels more comfortable to use.
 * Even though we'll continue using it this way on this app. (innerHTML).
 * But you'll see other method being used both in scrum boss FE developer career path and out in the 
 * world.
 * The way to understand this is to brake the code into 3 steps:
 * ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
 * 1. first we are kind of creating the li element
 * 2. then we are setting the text content of that element
 * 3. we are taking that expression and kind of appending it to the unordered list because
 * appending means to add something at the end of a document. So with this we have the pseudo code
 * for our solution.
 * 
 * create element
 * set text content
 * append to ul
 * lets create the code like this way
 */
for (let i = 0; i < myLeads.length; i++){
    //create element
    //document.createElement("li") //now we are creating something not fetching.
    //now we have created the list element, now we have to store it in a variable
    //set text content
    const li = document.createElement("li")
    //now we have to set the text content
    li.textContent = myLeads[i]
    //append to ul
    ulEl.append(li)
}
/**Personally, it's easier to understand the first line of code then the last 3 lines intuitively 
 * because there we got to see the html element in a more readable way
*/