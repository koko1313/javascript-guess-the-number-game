const inputField = document.getElementById("numberField");
const infoBox = document.getElementById("infoBox");
const counterBox = document.getElementById("counter");
const guessButton = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");
const playground = document.getElementById("playground");
const inputSetting = document.getElementById("inputSettings");
const maxNumberField = document.getElementById("maxNumber");

// ############################################################

let maxNumber = 100;
let counter = 0;
let randomNumber = null;

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
    playground.style.display = "none";
    inputSetting.style.display = "block";
}

function startGame() {
    maxNumber = maxNumberField.value;
    maxNumberField.value = "";
    randomNumber = generateRandomNumber();

    inputSetting.style.display = "none";
    playground.style.display = "block";
}

function numberChange() {
    if (inputField.value != "") {
        guessButton.disabled = false;
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * maxNumber);
}