let prices = [5,10, 15, 20, 25, 30];

function checkout(total, element) {
    return total+element;
}

let total = prices.reduce(checkout);

console.log(`The Total is: ${total}`);