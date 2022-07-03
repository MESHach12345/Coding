var buttonEl = document.querySelector("#myButton");
var imgEl = document.querySelector("#myImg");

buttonEl.addEventListener("click", () => {
    if (imgEl.style.visibility == "hidden") {
        imgEl.style.visibility = "visible";
    } else {
        imgEl.style.visibility = "hidden";
    }
})