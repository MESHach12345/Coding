const labelEl = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update() {
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours  >=12 ? "PM" : "AM";

        hours = (hours%12) || 12;

        if (minutes<10) {
            minutes = `0${minutes}`;
        }

        if (seconds<10) {
            seconds = `0${seconds}`;
        }

        return (`${hours}:${minutes}:${seconds} ${amOrPm}`);
    }
}