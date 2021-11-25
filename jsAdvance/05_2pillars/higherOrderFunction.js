//////////////////////////////////
//Higher Order Functions are those that take function as an argument or returns another function
////////////////////////////////

const giveAccessTo = (name) => 'Access granted to ' + name;

function authenticate(person) {
    let array = [];
    let verify = 100000;
    if (person.level === 'admin') {
        verify = 500000;
    } else if (person.level === 'user') {
        verify = 100000;
    }
    for (let i=0; i< verify; i++) {
        array.push(i);
    }
    return giveAccessTo(person.name);
}

function sing(person) {
    return 'la la la, my name is ' + person.name;
}

function letPerson (person, fn) {
    return fn(person);
}

const message = letPerson({level: 'admin', name: 'Sally'}, authenticate);
console.log(message);

const message1 = letPerson({level: 'user', name: 'Beo'}, sing);
console.log(message1);

////////////////Exercise
const multiplyBy = (num1) => {
    return (num2) => {
        return num1*num2;
    }
}

const multiplyBy2 = multiplyBy(2);
const multiplyBy10 = multiplyBy(10);

const result1 = multiplyBy2(5);
const result2 = multiplyBy10(5);

console.log('MultiplyBy2(5) => ', result1);
console.log('MultiplyBy10(5) => ', result2);


//-----------------------
const MULTIPLYBY = (num1) => (num2) => num1*num2;

const result3 = MULTIPLYBY(2)(5);
console.log('MULTPLIBY 2 x 5 => ', result3);

const multiplyBy5 = MULTIPLYBY(5);
const result4 = multiplyBy5(20);
console.log('multiplyBy5(20) => ', result4);