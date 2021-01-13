const inputField = document.getElementById("numberField");
const infoBox = document.getElementById("infoBox");
const counterBox = document.getElementById("counter");
const guessButton = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");

// ############################################################

const maxNumber = 100;
let counter = 0;

let randomNumber = generateRandomNumber();

// ############################################################

function check() {
    const insertedNumber = inputField.value;
    inputField.value = "";

    counter++;
    counterBox.innerText = counter;

    if (randomNumber == insertedNumber) {
        infoBox.innerText = "Браво! Ти позна!";
        inputField.style.display = "none";
        guessButton.style.display = "none";
        resetButton.style.display = "block";
    }
    else if (randomNumber > insertedNumber) {
        infoBox.innerText = "По-голямо от " + insertedNumber;
    }
    else if (randomNumber < insertedNumber) {
        infoBox.innerText = "По-малко от " + insertedNumber;
    }
}

function reset() {
    inputField.style.display = "block";
    guessButton.style.display = "block";
    resetButton.style.display = "none";
    infoBox.innerText = "Опитай се да познаеш числото";
    counter = 0;
    counterBox.innerText = counter;
    randomNumber = generateRandomNumber();
}

function generateRandomNumber() {
    return Math.floor(Math.random() * maxNumber);
}