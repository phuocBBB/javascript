//array reference to pointer
let array1 = [1,2,3,4];
let array2 = array1;

array1[1] = 6;

console.log(array1);
console.log(array2);

//copy array
array3 = [...array1];
array1[2] = 15;

console.log(array1);
console.log(array3);

//object reference to pointer
let child1 = {name:'Bun', age:10};
let child2 = child1;

child1.age = 5;
console.log(child1);
console.log(child2);

//copy object
let child3 = {...child1};
child1.name='Beo';
child1.age=10;

console.log(child1);
console.log(child3);

