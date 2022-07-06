var cellsEl = document.querySelectorAll('.cell');
var statusTextEl = document.querySelector('#statusText');
var restartBtnEl = document.querySelector('#restartBtn');
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options = ["","","","","","","","",""];

let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cellsEl.forEach(cell => {
        cell.addEventListener("click", cellClicked())
    });
    restartBtnEl.addEventListener("click", () => {
        restartGame();
    });
    statusTextEl.textContent = `${currentPlayer}'s Turn`;
    running = true;
}

function cellClicked() {
    var cellIndex = cellsEl.this.getAttribute(cellIndex);
    if (options[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner()
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {

}

function checkWinner() {

}

function restartGame() {

}

