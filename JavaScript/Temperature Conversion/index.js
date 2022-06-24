function submit() {
    var tempEl = document.getElementById("temperature").value;
    var celciusEl = document.getElementById("celcius");
    var fahrenheitEl = document.getElementById("fahrenheit");
    var displayEl = document.getElementById("tempDisplay");
    var convertedTemperature;

    if (celciusEl.checked) {
        convertedTemperature = (tempEl-32)*5/9;
        displayEl.innerHTML = `${convertedTemperature}°C`
    } else if (fahrenheitEl.checked) {
        convertedTemperature = (tempEl*9/5)+32;
        displayEl.innerHTML = `${convertedTemperature}°F`
    } else {
        alert("You need to select an Option");
    }
}