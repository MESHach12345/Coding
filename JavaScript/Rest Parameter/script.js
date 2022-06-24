var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numbers) {
    let total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}