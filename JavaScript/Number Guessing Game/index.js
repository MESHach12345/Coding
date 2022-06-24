const number = Math.floor(Math.random() * 10)+1;
console.log(number);

function submit() {
    var guessEl = document.getElementById('guess').value;
    if (guessEl != number) {
        alert('The number you have guessed is incorrect. Please try Again.');
    } else {
        alert("Congratulations. Your guess was correct!");
    }
}