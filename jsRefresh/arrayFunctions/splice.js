// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// syntax:
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

//Remove 0 (zero) elements before index 2, and insert "drum"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed = myFish.splice(2,0,'drum');

console.log('Remove 0 (zero) elements before index 2, and insert "drum":');
console.log('removed: ', removed);
console.log('myFish: ', myFish);

//Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
removed = myFish.splice(2,0,'drum','guitar');

console.log('+++++Remove 0 (zero) elements before index 2, and insert "drum" and "guitar":');
console.log('removed: ', removed);
console.log('myFish: ', myFish);

//Remove 1 element at index 3
myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']

console.log('+++++Remove 1 element at index 3:');
console.log('myFish: ', myFish);
removed = myFish.splice(3,1);

console.log('removed: ', removed);
console.log('myFish: ', myFish);

//Remove 1 element at index 2, and insert "trumpet"
myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']

console.log('+++++Remove 1 element at index 2, and insert "trumpet"');
console.log('myFish: ', myFish);

removed = myFish.splice(2,1,'trumpet');

console.log('removed: ', removed);
console.log('myFish: ', myFish);

//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"

myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']

console.log('+++++Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"');
console.log('myFish: ', myFish);

removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

console.log('removed: ', removed);
console.log('myFish: ', myFish);

//Remove 2 elements, starting from index 2
myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']

console.log('+++++Remove 2 elements, starting from index 2');
console.log('myFish: ', myFish);

removed = myFish.splice(2,2);

console.log('removed: ', removed);
console.log('myFish: ', myFish);

//Remove 1 element from index -2
myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']

console.log('+++++Remove 1 element from index -2');
console.log('myFish: ', myFish);

removed = myFish.splice(-2,1)

console.log('removed: ', removed);
console.log('myFish: ', myFish);

//Remove all elements, starting from index 2
myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']

console.log('+++++Remove all elements, starting from index 2');
console.log('myFish: ', myFish);

removed = myFish.splice(-2)

console.log('removed: ', removed);
console.log('myFish: ', myFish);