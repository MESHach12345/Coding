// let date = new Date(2022, 6, 2, 16, 22, 20);

// let date = new Date("January 1, 2023, 00:00:00");

let date = new Date();

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// let minute = date.getMinutes();
// let second = date.getSeconds();
// let ms = date.getMilliseconds();

document.getElementById("myLabel").innerHTML = formatDate(date);
document.getElementById("myLabel").innerHTML += formatTime(date);

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return (`${month}/${day}/${year} `);
}

function formatTime(time) {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let amOrPm = hour>=12 ? "PM" : "AM";

    return (`${hour}:${minute}:${second} ${amOrPm}`);
}