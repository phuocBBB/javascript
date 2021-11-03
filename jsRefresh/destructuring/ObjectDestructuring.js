//example 1
let {name, age} = {name:'Beo', age:10};

console.log(`name: ${name}`);
console.log(`age: ${age}`);

//example 2 , default value in case there is no key in the object:
let person = {
    firstName: 'Khoa',
    lastName: 'Hoang',
    myage: 10
};

console.log(person);

let { firstName, middleName='', lastName, myage=5 } = person;

console.log(`first name: ${firstName}`);
console.log(`middle name: ${middleName}`);
console.log(`last name: ${lastName}`);
console.log(`age: ${age}`);
