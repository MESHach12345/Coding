sum(4,3, displayDOM);

function sum(a,b, display) {
    let result = a+b;
    display(result);
}

function displayConsole(output) {
    console.log(output);
}

function displayDOM(output) {
    var resultEl = document.getElementById("result");
    resultEl.innerHTML += output;
}

