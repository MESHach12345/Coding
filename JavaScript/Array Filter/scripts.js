let ages = [18, 16, 21, 17, 19, 90];

function checkAge(element) {
    return element >= 18;
}

let adults = ages.filter(checkAge);

adults.forEach(print);

function print(element) {
    console.log(element);
}