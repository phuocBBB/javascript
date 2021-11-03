//find index of a prime number in an array
function isPrime(num) {
    for (let i=2; num > i; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

let arr1 = [4,6,8,9,12];
let arr2 = [1,3,6, 7, 8, 9];

console.log(arr1.findIndex(isPrime));
console.log(arr2.findIndex(isPrime));

//find index using arrow function
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit => fruit === 'banana'));

console.log(index);