//@ts-nocheck
// Correct the element selection and use correct case
let pwEl = document.getElementById("pw-el");
let buttonEl = document.getElementById("button-el");

// Declare all characters for password
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// Function to generate password
function generatePassword(length) {
    console.log("clicked!");
    let result = '';
    const charactersLength = characters.length;

    // Generate password of the specified length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

// Add event listener to button
// @ts-ignore
buttonEl.addEventListener("click", function() {
    // Set the password in the DOM when the button is clicked
    // @ts-ignore
    pwEl.textContent = "Result: " + generatePassword(12);
});

/**Spelling Errors in getElementById:
The correct method name is getElementById, but in your code, you've written getElementbyId and getelementbyId (incorrect capitalization). JavaScript is case-sensitive, so these will not work.
2. Incorrect Assignment of pwEl:
You are trying to assign the string "Result: " directly to pwEl (which is a DOM element), but that doesn't work. Instead, you need to update the textContent property of the pwEl element.
3. Generating a Password of Fixed Length:
In your generatePassword function, you're using charactersLength for the loop. This will generate a password of length equal to the number of characters in the string, which is not what you want. Instead, you want to specify the length of the password (in this case, 12 characters).
4. Missing length Argument in generatePassword:
You need to pass a length argument to generatePassword when calling it from the button's onclick handler, and use that to control the number of characters generated.
5. Modifying the textContent of pwEl on Button Click:
You need to update the content of the pwEl element every time the button is clicked. Right now, you're setting it once before the generatePassword() function is called, so you won't see the new password each time.
Explanation of Changes:
Fixed method names: getElementById is used correctly.
Password length argument: The generatePassword function now takes a length argument (default is 12).
Event Listener: Instead of directly setting onclick in HTML, I used addEventListener to make it more flexible and clear.
Text Update: When the button is clicked, pwEl.textContent is updated with the new password */