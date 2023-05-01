//Set initial values for the pet's status
let petName = "Teetee";
let hungerlevel = 50;
let mood = "Sad";
let personality = "Playful";
let thirstlevel = 50;
let friend = "Kiko the dog";
let age = "19";

//Get DOM elements for the pet's status
const petNameEl = document.querySelector("#pet-name");
const hungerEl = document.querySelector("#hunger-level");
const moodEl = document.querySelector("#mood");
const personalityEl = document.querySelectorAll("#playful");
const thirstEl = document.querySelectorAll("#thirst-level");
const friendEl = document.querySelector("#friend");
const age = document.querySelector("#age");

//Get DOM elements for the action buttons
const feedButton = document.querySelector("#feed-button");
const playButton = document.querySelector("#play-button");
const drinkButton = document.querySelector("#drink-button");

function feedPet() {
 if(hungerLevel > 10) {
    hungerLevel -= 10;
    hungerEl.innerText = hungerLevel + "%";
    mood = "Sad";
    moodEl.innerText = mood;

 } else {
    hungerLevel = 0;
    hungerEl.innerText = 0 + "%";
    mood = "Happy";
    moodEl.innerText = mood;
 }
 
   }


feedButton.addEventListener("click", feedPet);


