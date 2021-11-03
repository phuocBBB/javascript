//array
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
const sublist = [numbers, 4];
console.log(newNumbers);
console.log(sublist);

//object
const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28,
}

console.log(person);
console.log(newPerson);