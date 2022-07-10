const API = "https://dog.ceo/api/breeds/image/random";

const dogImage = document.querySelector("#dogImage");
let buttonEl = document.querySelector("#imageBtn");

fetch(API).then(response => response.json())
    .then(json => {
        dogImage.innerHTML = `<img src = "${json.message}" width = "300px" height = "300px"/>`;
    });

buttonEl.addEventListener("click", () => {
    fetch(API).then(response => response.json())
    .then(json => {
        dogImage.innerHTML = `<img src = "${json.message}" width = "300px" height = "300px"/>`;
    });
})