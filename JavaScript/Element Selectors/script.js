// var titleEl = document.getElementById('myTitle');

// titleEl.style.backgroundColor = "lightgreen";

// let fruits = document.getElementsByName("fruits");

// fruits.forEach((fruit) => {
//     if (fruit.checked) {
//         console.log(fruit.value);
//     }
// });

// let veggies = document.getElementsByTagName("li");

// veggies[0].style.backgroundColor = "orange";
// veggies[1].style.backgroundColor = "beige";
// veggies[2].style.backgroundColor = "purple";
// veggies[2].style.color= 'white';

// let desserts = document.getElementsByClassName("desserts");

// desserts[0].style.color="red";
// desserts[1].style.color="blue";
// desserts[2].style.color="green";

// let element = document.querySelector("#myTitle"); 
// element.style.backgroundColor = 'lightgreen';

let elements = document.querySelectorAll(".desserts");
elements.forEach(element => {
    element.style.backgroundColor ="lightgreen";
})