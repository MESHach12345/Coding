class Car {
    constructor(name, color, topSpeed) {
        this.name = name;
        this.color = color;
        this.topSpeed = topSpeed;
        this.currentSpeed = 0;
    }

    drive() {
        console.log("Just Drove 2 Miles!");
        this.curentSpeed += 10;
        console.log(`Current Speed: ${this.currentSpeed} mph`);
    }

    brake() {
        console.log("Just Stopped the Car!");
    }
}

// let ferrari = new Car("Ferrari", "Red", 250);
// console.log(ferrari.name);
// console.log(ferrari.color);
// console.log(ferrari.topSpeed);

// ferrari.drive();
// ferrari.brake();

const numbers = [1,2,3];
number.push(4);

Array.prototype.myPush = function () {
    return this.length;
}

const fruits = ['🍌', "🍓", "🍪", "🍐", "🍎"];
// 

console.log(fruits.myPush);