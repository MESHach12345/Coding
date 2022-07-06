var playerTextEl = document.querySelector("#playerText");
var computerTextEl = document.querySelector("#computerText");
var resultTextEl = document.querySelector("#resultText");
var choiceButtonsEl = document.querySelectorAll(".choiceButton");

var playerChoice;
var computerChoice;

choiceButtonsEl.forEach(choice => choice.addEventListener('click', () => {
    playerChoice = choice.textContent;
    computerTurn();
    playerTextEl.textContent = `Player: ${playerChoice}`;
    computerTextEl.textContent = `Computer: ${computerChoice}`;
    result();
}));

function computerTurn() {
    var number = Math.floor(Math.random() * 3);

    switch (number) {
        case 0:
            computerChoice = "ROCK";
            break;
        
        case 1:
            computerChoice = "PAPER";
            break;

        case 2:
            computerChoice = "SCISSORS";
            break;

        default:
            break;
    }
}

function result() {
    if (playerChoice == "ROCK") {
        if (computerChoice == "ROCK") {
            resultTextEl.textContent = "Result: DRAW";
        } else if (computerChoice == "PAPER") {
            resultTextEl.textContent = "Result: Computer WINS";
        } else {
            resultTextEl.textContent = "Result: Player WINS";
        }
    } else if (playerChoice == "PAPER") {
        if (computerChoice == "ROCK") {
            resultTextEl.textContent = "Result: Player WINS";
        } else if (computerChoice == "PAPER") {
            resultTextEl.textContent = "Result: DRAW";
        } else {
            resultTextEl.textContent = "Result: Computer WINS";
        }
    } else {
        if (computerChoice == "ROCK") {
            resultTextEl.textContent = "Result: Computer WINS";
        } else if (computerChoice == "PAPER") {
            resultTextEl.textContent = "Result: Player WINS";
        } else {
            resultTextEl.textContent = "Result: DRAW";
        }
    }
}