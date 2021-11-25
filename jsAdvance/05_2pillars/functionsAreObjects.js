function one() {
    return 1;
}

console.log(one());


const obj1 = {
    two: () => {
        return 2;
    }

};

console.log(obj1.two());

const obj2 = {
    three() {
        return 3;
    }
}

console.log(obj2.three());


function fourth() {
    return 4;
}

console.log(fourth.call());

const fifth = Function('num', 'return num');

console.log(fifth(5));

/////////////////////////
////Function is data that we can pass around
/////////////////
var stuff = function () {
    console.log(6);
}
stuff();

//////////////////
function a(fn) {
    fn();
}

a(() => {console.log(7);});

///////////////////
function b() {
    return function c() {console.log('8');};
}

let d = b();
d();

/////////////////////////
