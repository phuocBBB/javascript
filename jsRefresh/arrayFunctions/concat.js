//concat 2 arrays
const arr1 = [1,2,3];
const arr2 = [3,4,5];

const arr3 = arr1.concat(arr2);

console.log(arr3);

//concat 3 arrays
const arr4 = ['a', 'b', 'c'];

const arr5 = arr1.concat(arr2, arr4);
console.log(arr5);

//concat nested arrays
const arr6 = arr1.concat(arr2, [['x','y']]);

console.log(arr6);
arr6.forEach((item) => {
    console.log(item);
});