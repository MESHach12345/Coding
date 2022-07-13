// class Car {
//     constructor(name, color, topSpeed) {
//         this.name = name;
//         this.color = color;
//         this.topSpeed = topSpeed;
//         this.currentSpeed = 0;
//     }

//     drive() {
//         console.log("Just Drove 2 Miles!");
//         this.curentSpeed += 10;
//         console.log(`Current Speed: ${this.currentSpeed} mph`);
//     }

//     brake() {
//         console.log("Just Stopped the Car!");
//     }
// }

// let ferrari = new Car("Ferrari", "Red", 250);
// console.log(ferrari.name);
// console.log(ferrari.color);
// console.log(ferrari.topSpeed);

// ferrari.drive();
// ferrari.brake();

// const numbers = [1,2,3];
// numbers.push(4);

// Array.prototype.myPush = function (item) {
//     this[this.length] = item;
//     return this;
// }

// const fruits = ['🍌', "🍓", "🍪", "🍐", "🍎"];

// fruits.myPush("🍉");
// fruits.myPush("🍊");
// fruits.myPush("🍍");

// console.log(fruits);


let input = document.querySelector("#amount");
let deposit = document.querySelector("#deposit");
let withdraw = document.querySelector("#withdraw");
let balanceDisplay = document.querySelector("#balance");
class Account {
    constructor(balance) {
        this.balance = balance;
    }

    withdraw(amount) {
        if (amount == "") {
            alert("Please Re-Enter a valid Number");
        }
        else if (amount > this.balance) {
            console.log("Insufficient Funds");
        } else {
            console.log("Withdrawn: " + amount);
            this.balance = this.balance - amount;
            console.log("New Balance: " + this.balance);
        }
    }

    deposit(amount) {
        if (amount == "") {
            alert("Please Re-Enter a valid Number");
        } else {
            console.log("Deposit: " + amount);
            this.balance = this.balance + amount;
            console.log("New Balance: " + this.balance);
        }
    }
}

let initialBalance = prompt("Please Enter the Initial Balance: ");

let acc = new Account(parseInt(initialBalance));

balanceDisplay.innerHTML = `Balance: $${acc.balance}`;

deposit.addEventListener("click", () => {
    acc.deposit(parseInt(input.value));
    balanceDisplay.innerHTML = `Balance: $${acc.balance}`;
})

withdraw.addEventListener("click", () => {
    acc.withdraw(parseInt(input.value));
    balanceDisplay.innerHTML = `Balance: $${acc.balance}`;
})