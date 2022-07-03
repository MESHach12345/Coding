var innerDivEl = document.getElementById('innerDiv');
var outerDivEl = document.getElementById('outerDiv');

// innerDivEl.addEventListener('mouseover', () => {
//     innerDivEl.style.backgroundColor = "red";
// });

// innerDivEl.addEventListener('mouseout', () => {
//     innerDivEl.style.backgroundColor = "lightgreen";
// })

innerDivEl.addEventListener('click', changeBlue, false);
outerDivEl.addEventListener('click', changeBlue);

function changeBlue() {
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightblue"
}