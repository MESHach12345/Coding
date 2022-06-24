let numbers = [1, 2, 3, 4, 5];

function square(element) {
    return Math.pow(element, 2);
}

let squares = numbers.map(square);

function print(element) {
    console.log(element);
}

squares.forEach(print);

function cube(element) {
    return Math.pow(element, 3);
}

let cubes = numbers.map(cube);

cubes.forEach(print);