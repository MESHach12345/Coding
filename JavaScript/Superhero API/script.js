const accessToken = 10218769797030800;
const API = `https://superheroapi.com/api.php/${accessToken}`;

let imageEl = document.querySelector("#imageDiv");
let searchEl = document.querySelector("#search");
let searchButtonEl = document.querySelector("#searchBtn");
let randomButtonEl = document.querySelector("#randomBtn");

searchButtonEl.addEventListener("click", () => {
    fetch(`${API}/search/${searchEl.value}`)
    .then (response => response.json())
    .then (json => {
        if (json.results.length > 1) {
            json.results.forEach(result => {
                imageEl.innerHTML += `<img src = "${result.image.url}" height = 300 width = 300/>`;
            })
        } else {
            imageEl.innerHTML = `<img src = "${json.results.image.url}" height = 300 width = 300/>`;
        }
    })
});

randomButtonEl.addEventListener("click", () => {
    fetch(`${API}/${Math.floor(Math.random() *731 + 1)}`)
    .then(response => response.json())
    .then(json => {
        imageEl.innerHTML = `<img src = "${json.image.url}" height = 300 width = 300/>`;
    });
})



// const getSuperhero = () => {
//     fetch(`${API}/${Math.floor(Math.random() *731 + 1)}`)
//     .then(response => response.json())
//     .then(json => {
//         console.log(json.name);
//         imageEl.innerHTML = `<img src = "${json.image.url}" height = 300 width = 300/>`;
//     });
// }

// getSuperhero();