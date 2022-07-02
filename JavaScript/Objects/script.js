const car = {
    model: "Mustang",
    color: "Black",
    year: 2023,

    drive: () => {
        console.log("You Drive the Car")
    },

    brake: () => {
        console.log("You Step on the Brakes")
    }
}

console.log(car.model);
console.log(car.color);
console.log(car.year);
car.drive();
car.brake();