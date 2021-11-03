//use with arrow function
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
]

const result_name = inventory.find(({name}) => name === 'cherries');

const result_quantity = inventory.find(({quantity}) => quantity === 2);

console.log('++++++++++use with arrow function');
console.log(result_name);

console.log(result_quantity);

//use callback function

//find a prime number in an array
function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

const lst1 = [4,6,8,12];
const lst2 = [4,6,7,12];

console.log('+++++++++++find a prime number in an array:');
console.log(lst1.find(isPrime));
console.log(lst2.find(isPrime));

//work with array
const array = [0,1,,,,5,6];

//show index of those with assigned value
console.log('++++++++show index of those with assigned value:');
array.find( (item, index, arr) => {
    if (item !== undefined){
        console.log(item, index);
    }

});

//show index of those with unassigned value
console.log('++++++++show index of those with UNASSIGNED value:');
array.find( (item, index, arr) => {
    if (item === undefined) {
        console.log(item, index);
    }
});

//delete those array items with unassigned value
console.log('+++++++++delete those array items with unassigned value');
array.find( (item,index,arr) => {
    if (item === undefined) {
        delete array[index];
    }
});
array.forEach( (item, index, arr) => {
    console.log(item, index);
});
