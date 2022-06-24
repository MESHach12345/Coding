sum(2,3, displayDOM);

function sum(a,b, display) {
    
}

function sum(a,b) {
    let result = a+b;
    return result;
}

function displayConsole(output) {
    console.log(output);
}

function displayDOM(output) {
    var resultEl = document.getElementById("result");
    resultEl.innerHTML += output;
}

