// const buttonEl = document.getElementById("myButton");
// buttonEl.onclick = doSomething;

// const bodyEl = document.body;
// bodyEl.onload = doSomething;

var textEl = document.getElementById("myText");
var divEl = document.getElementById("myDiv");

// textEl.onchange = doSomething;
// divEl.onmouseover = doSomething;
// divEl.onmouseout = doSomethingElse;

divEl.onmousedown = doSomething;
divEl.onmouseup = doSomethingElse;

function doSomething() {
    divEl.style.backgroundColor = "green";
}

function doSomethingElse() {
    divEl.style.backgroundColor = "lightgreen";
}

