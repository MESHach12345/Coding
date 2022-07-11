
// API Documentation
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd244a26337mshd30dfe7758eb323p157634jsn641d222fd274',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};

// Declaring Variables
let search = document.querySelector("#searchField");
let button = document.querySelector("#searchBtn");
let cityEl = document.querySelector("#displayCity");
let climate = document.querySelector("#climate");
let weather = document.querySelector("#weather");
let temperature = document.querySelector("#temperature");
let searchText;

// Button On Click
button.addEventListener("click", () => {
    if (search.value == "") {
        console.log("Empty Field. Please Enter a City");
    } else {

        // Lowercasing Input and changing it to correct format for URL Insertion
        searchText = search.value.toLowerCase();
        searchText = searchText.split(" ");
        let finalText = (searchText[0]+"%20");
        if (searchText.length > 1) {
            for (let i = 1; i < searchText.length-1; i++) {
                finalText += (searchText[i]+"%20");
            }
            finalText += searchText[searchText.length-1];


            fetchAPI(finalText, search);
        } else {
            fetchAPI(searchText, search);
        }
    }
})

// Function to Print Content on Screen
function displayText(data) {
    weather.innerHTML = data.weather[0].main;
    temperature.innerHTML = `Temp: ${Math.ceil(data.main.temp)}°C (${celciusToFahrenheit(data.main.temp)}°F)<br>
    Min Temp: ${Math.ceil(data.main.temp_min)}°C (${celciusToFahrenheit(data.main.temp_min)}°F)<br>
    Max Temp: ${Math.ceil(data.main.temp_max)}°C (${celciusToFahrenheit(data.main.temp_max)}°F)`;
}

// Function to fetch results from API
function fetchAPI(city, search) {
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric`, options)
        .then(response => response.json())
        .then(data => {
            cityEl.innerHTML = search.value;
            displayText(data);
        })
        .catch(err => console.error(err));
}

// Function to convert Temperature to Fahrenheit
function celciusToFahrenheit(temp) {
    let fahrenheit = Math.ceil((temp*9/5)+32);
    return (fahrenheit);
}