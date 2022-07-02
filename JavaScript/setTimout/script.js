
let item = "Cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 5000, item, price);
let timer2 = setTimeout(secondMessage, 10000);
let timer3 = setTimeout(thirdMessage, 15000);

function firstMessage(item, price) {
    alert(`Buy this ${item} for $${price}`);
}

function secondMessage() {
    alert(`This is not a scam`);
}

function thirdMessage() {
    alert(`DO IT`);
}

var buttonEl = document.getElementById('myButton');

buttonEl.onclick = () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("Thanks for Buying <3");
}