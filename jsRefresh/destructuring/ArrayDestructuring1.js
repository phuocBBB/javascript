//example 1
[a,b] = [1,2];

console.log(a);
console.log(b);

//example 2
const numbers = [1,2,3];
[num1,num2] = numbers;

console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);

[num1, ,num3] = numbers;
console.log(`num1: ${num1}`);
console.log(`num3: ${num3}`);
