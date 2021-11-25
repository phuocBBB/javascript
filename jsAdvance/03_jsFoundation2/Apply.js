function a() {
    console.log('hi');
}

const wizard = {
    name: 'Merlin',
    health: 100,
    heal(...nums) {
        return this.health += nums.reduce((a, b) => a + b, 0);
        // return this.health += nums;
    }
};

const archer = {
    name: 'Robin Hood',
    health: 30,
};

console.log(1, archer);
wizard.heal.apply(archer, [50, 30, 20]);
console.log(1, archer);

//exercises
const array = [1,2,3];

function getMaxNumber(arr){
    return Math.max.apply(null, arr);
}

console.log(getMaxNumber(array));