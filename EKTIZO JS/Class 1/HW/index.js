// alert("Hello World")

function print() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var discount = document.getElementById('discount').value;
    var price = document.getElementById('price').value;
    var gender;

    var fullname = firstname + ' ' + lastname;

    if (document.getElementById('yes_member').checked) {
        price = price-price*discount/100;
    } else if (document.getElementById('no_member').checked) {
        
    } else {
        return ("Member Option Not selected.");
    }

    if (document.getElementById("male").checked) {
        gender="Male";
    } else if (document.getElementById('female').checked) {
        gender =  "Female";
    } else {
        return ("Gender not Selected")
    }

    document.getElementById("result").innerHTML = fullname + " you must pay: " + price;
}

function display() {
    document.getElementById('conditional').style.display = 'block';
}

function hide() {
    document.getElementById('conditional').style.display = 'none';
}