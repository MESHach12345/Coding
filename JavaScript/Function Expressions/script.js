// sayHello();

// function sayHello() {
//     console.log('Hello');
// }

// const greeting = function() {
//     console.log('Greetings');
// }

// greeting();

var labelEl = document.getElementById('myLabel');
var decreaseEl = document.getElementById('decreaseButton');
var increaseEl = document.getElementById('increaseButton');
var count = 0;

// function increaseCount() {
//     count++;
//     labelEl.innerHTML = count;
// }

// function decreaseCount() {
//     count--;
//     labelEl.innerHTML = count;
// }


decreaseEl.onclick = function() {
    count--;
    labelEl.innerHTML = count;
}

increaseEl.onclick = function() {
    count++;
    labelEl.innerHTML = count;
}