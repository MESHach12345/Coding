var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers);

var max = Math.max(numbers); //Wont Work
console.log(max);

var max = Math.max(...numbers); //Will Work
console.log(max);

let class1 = ["Cristiano Ronaldo", "Jadon Sancho", "David De Gea"];
let class2 = ["Paul Pogba", "Jesse Lingard", "Harry Maguire"];

// class1.push(class2); //This will push the array class2 into class1. So class1 will contain an array inside it...
// console.log(class1);

class1.push(...class2); //This will push all the elements of class1 into class2...
console.log(class1);