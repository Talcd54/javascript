//@ts-nocheck
/*
You are going to build an app that challenges players to identify a Christmas Movie from some emoji 🍿 🎅 🎬. The players will have 3 guesses per movie.

For example, the emoji 🌇 💣 👮 ✈️ ️🔫  represent the film “Die Hard”, which everyone knows is the best Christmas movie of all time.

In data.js you have an array of Christmas movies with emoji and text for aria labels.

Your task is to build an app that meets these criteria:

- The app should present the player with a set of emoji selected at random from the array in data.js. 

- The player will input their guess.

- If the player guesses correctly, the app should display a message saying "Correct!". Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.

- If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”

- If the player fails to guess correctly on the next two attempts, the app should display a message saying, `The film was <Film Name Here>!`. After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.

- When all films in the array have been used, the player should see a message saying "That's all folks!".

- Each film should only be used once. There should be no repetition. 


Stretch Goals

- Use AI to decide if an answer is correct or incorrect. For example if the correct answer is "The Polar Express" but the player inputs "Polar Express" a straight comparison of the two strings will find that the player's answer was incorrect. AI could assess if there is sufficient similarity between the strings to judge it as correct. 

- Improve the UX by disabling the form/button when the game is over and during the pause between questions.
*/

import { films } from './data.js'

//put some variables general
let shuffledMovies = [...films].sort(() => Math.random() - 0.5); // Shuffle movies
let currentMovieIndex = 0
let guessesRemaining = 3

// DOM Elements
const emojiContainer = document.querySelector('.emoji-clues-container')
const messageContainer = document.getElementById('info-Text')
const guessForm = document.querySelector('form');
const guessInput = document.getElementById('guess-input')

function displayMovie(movie) {
    emojiContainer.innerHTML = movie.emoji.join(' ')
    emojiContainer.setAttribute('aria-label', movie.ariaLabel);
    messageContainer.textContent = `You have ${guessesRemaining} guesses remaining.`
    guessInput.value = ''
}

function handleGuess(event) {
    event.preventDefault()

    const guess = guessInput.value.trim().toLowerCase();
    const correctTitle = shuffledMovies[currentMovieIndex].title.toLowerCase();

    if (guessesRemaining > 1 && guess !== correctTitle) {
        guessesRemaining--
        messageContainer.textContent = `Incorrect! You have ${guessesRemaining} guesses remaining.`
    } else if (guess === correctTitle) {
        messageContainer.textContent = 'Correct!'
        proceedToNextMovie()
    } else {
        messageContainer.textContent = `The film was "${shuffledMovies[currentMovieIndex].title}"!`
        proceedToNextMovie()
    }
}

function proceedToNextMovie() {
    // Disable input during the pause
    guessInput.disabled = true;
    guessForm.querySelector('button').disabled = true;

    setTimeout(() => {
        currentMovieIndex++
        guessesRemaining = 3

        if (currentMovieIndex < shuffledMovies.length) {
            displayMovie(shuffledMovies[currentMovieIndex])
        } else {
            messageContainer.textContent = "That's all folks!"
        }

        // Re-enable input
        guessInput.disabled = false;
        guessForm.querySelector('button').disabled = false
    }, 3000)
}

// Attach event listener
guessForm.addEventListener('submit', handleGuess)

// Initialize the game
displayMovie(shuffledMovies[currentMovieIndex])
