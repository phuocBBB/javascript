//////////////////////////////////////////////////////////
//Closure is a combination of function and the lexical environment from which it was declared
//Closure allow a function to access variables from an enclosing scope or environment, even
//it leaves the scope in which it was declared
//-Javascript engine will keep all varibles that child functions use in the closure
//////////////////////////////////////////////////////////

function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father';
        return function c() {
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`;
        }
    }
}

const one = a();
console.log(one);

const two = one();

console.log(two);

const three = two();

console.log(three);

///////////////////
const boo = (string) => (name) => (name2) =>
    console.log(`${string} ${name} ${name2}`);

const booString = boo('hi');
console.log(booString);
const booStringName = booString('Beo');
console.log(booStringName);
const booStringNameName2 = booStringName('Bun');
console.log(booStringNameName2);


///////////////////
//Exercise 1
function callMeMaybe() {
    setTimeout(function() {
        console.log(callMe)
    }, 4000);
    const callMe = 'Hi! I am now here!'; //even though this variable creation is place after, but by the time console.log is called, this line already run
}

callMeMaybe();

/////////////////
//Closure and Memory => Memory efficient
//////////////////////////
function heavyDuty(index) {
    const bigArray = new Array(7000).fill('BlaBla');
    console.log('created!');
    return bigArray[index];
}

heavyDuty(688);
heavyDuty(688);
heavyDuty(688);



const getHeavyDuty = heavyDuty2();
// getHeavyDuty(688);
// getHeavyDuty(688);
// getHeavyDuty(688);

function heavyDuty2() {
    const bigArray = new Array(7000).fill('BlaBla2');
    console.log('created again!');
    return function(index) {
        console.log('inside');
        return bigArray[index];
    }

}

////////////////////////////////////////
//Closure - Encapsulation
//////////////////////////////////////////
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'Boommmmm';
    };
    setInterval(passTime, 1000);
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    };
};

const button = makeNuclearButton();
button.totalPeaceTime();



