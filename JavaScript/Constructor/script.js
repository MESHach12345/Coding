class Student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study() {
        console.log(`${this.name} is Studying`);
    }
}

const student1 = new Student("Sam", 20, 3.3);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();