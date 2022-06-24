let grades= [100, 50, 90, 60 , 80, 70];

function descendingSort(x, y) {
    return y-x;
}

function ascendingSort(x, y) {
    return x-y;
}

grades = grades.sort(descendingSort);

grades.forEach(print);

function print(element) {
    console.log(element);
}

grades = grades.sort(ascendingSort);

grades.forEach(print);