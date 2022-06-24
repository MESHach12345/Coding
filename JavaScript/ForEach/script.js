let players = ["ronaldo", "de Gea", "varane", "fernandes"];

players.forEach(capitalize);
players.forEach(print);

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
    console.log(element)
}