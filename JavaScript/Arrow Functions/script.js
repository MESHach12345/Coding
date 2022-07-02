// const greeting = function(userName) {
//     console.log(`Hello ${userName}`);
// }

// const greeting = (username) => {
//     console.log(`Hello ${username}`);
// }

// greeting("Sam");

// const percent = (x,y) => {
//     return x/y*100;
// }

// console.log(`${percent(49,60)}%`)

let grades = [100,50,90,60,80,70];

grades.sort((x,y) => {
    return y-x;
});

grades.forEach((element) => {
    console.log(element);
});