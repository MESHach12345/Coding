var displayEl = document.getElementById('display');

let count = 0;
let max = window.prompt("Enter the Max Limit: ");
max = Number(max);

const myTimer = setInterval(() => {
    count++;
    displayEl.innerHTML = count;
    if (count > max) {
        clearInterval(myTimer);
    }
}, 1000);