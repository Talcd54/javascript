let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})
/*
/**Now our job is to make our leads list clickable. If a sales representative has gathered all of the leads she can
 * click and check them out again on a later stage if she wants to. 
 * So in order to do that we need to map the lead in a anchor tag (<a>) inside of the list item
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        listItems += "<li> <a href='#'>" + myLeads[i] + "</a></li>"
        // Can you make the link open in a new tab?
        listItems += "<li><a target='blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems  
}*/
/**this is an ugly way to write this line of code. There are to much ""  and plusses and so on, so in order to make
 * this expression a lot simpeler we use what's called template strings. you do that by replacing the outer quotes by
 * backtick strings (CTRLGR+µ). The positive side of this is that you can brake your codeline into multiple lines, as when you
 * used the double quotes you had error messages.
 * listItems += `<li><a target='blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>`
 * this gives us the opportunity to write our html in java like it would look in an html file
*/
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        //listItems += "<li> <a href='#'>" + myLeads[i] + "</a></li>"
        // it's time to delete " + myLeads[i] + " and replace it with a dollar sign and open and close curly brackets
        //passing in whatever javascript we want inside and deleting 1 plus sign
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        //this is how you escape out of the string and shove a JavaScript expression into the string
    }
    ulEl.innerHTML = listItems
}
/**I don't understand why we need to write twice ${myLeads[i]}?
 * ChatGPT
 * In the renderLeads function, ${myLeads[i]} appears twice because it is used both as 
 * - the value of the href attribute in the <a> tag and 
 * - as the text content that will be displayed for the link itself.
 * The 1st  ${myLeads[i]} is inside the href attribute. This tells the browser where the link should go when clicked.
 * The value in myLeads[i] (which is a URL) is inserted as the destination of the link.
 * The 2nd  ${myLeads[i]} is between the opening and closing <a> tags. This sets the text that appears on the link.
 * In this case, it will display the URL from myLeads[i] as the clickable text on the web page
 * If you wanted to display a different text for the link, you could replace the second ${myLeads[i]} with something else.
 * For example, if you wanted the text to be "Visit Link" instead of showing the URL, you could change it to:
 * listItems += `
    <li>
        <a target='_blank' href='${myLeads[i]}'>
            Visit Link
        </a>
    </li>
`
In this case, the URL would still be the destination, but the link text would say "Visit Link."
 */