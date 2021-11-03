class Human {
    constructor(gender) {
        this.gender = gender
    }
    printGender() {
        console.log(`gender: ${this.gender}`);
    }
}

class Person extends Human {
    constructor(gender, name, age) {
        super(gender);
        this.name = name;
        this.age = age;
    }

    printMyName() {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
}

const person = new Person('Male','Bin', 16);
person.printMyName();
person.printGender();