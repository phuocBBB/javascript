const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log('All items');
console.log(animals);

//from index 2 till end
console.log('from index 2 till end');
console.log(animals.slice(2));

//from index 2 till index 3
console.log('from index 2 till index 3');
console.log(animals.slice(2, 4));

//from index 1, till index 4
console.log('from index 1, till index 4');
console.log(animals.slice(1, 5));

//last two item
console.log('last two item');
console.log(animals.slice(-2));

//from index 2 till index -2
console.log('from index 2 till index -2');
console.log(animals.slice(2, -1));

//Slice example
// Using slice, create newCar from myCar.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

// Change the color of myHonda.
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)
