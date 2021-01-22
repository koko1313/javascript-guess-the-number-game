const inputField = document.getElementById("numberField");
const infoBox = document.getElementById("infoBox");
const counterBox = document.getElementById("counter");
const guessButton = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");
const playground = document.getElementById("playground");
const inputSetting = document.getElementById("inputSettings");
const maxNumberField = document.getElementById("maxNumber");
const startGameButton = document.getElementById("startGameButton");

// ############################################################

let maxNumber = 100;
let counter = 0;
let randomNumber = null;

// ############################################################

function check() {
    const insertedNumber = Number(inputField.value);
    inputField.value = "";

    counter++;
    counterBox.innerText = counter;

    if (insertedNumber > maxNumber) {
        infoBox.innerText = `Въведеното число е по-голямо от лимита: ${maxNumber}`;
        return;
    }
    else if (insertedNumber < 0) {
        infoBox.innerText = `Диапазона е от 0 до ${maxNumber}`;
        return;
    }

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
    startGameButton.disabled = true;
    infoBox.innerText = "Опитай се да познаеш числото";
    counter = 0;
    counterBox.innerText = counter;
    playground.style.display = "none";
    inputSetting.style.display = "block";
}

function startGame() {
    maxNumber = Number(maxNumberField.value);
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

function enableStartButton() {
    if (maxNumberField.value != "") {
        startGameButton.disabled = false;
    } else {
        startGameButton.disabled = true;
    }
}