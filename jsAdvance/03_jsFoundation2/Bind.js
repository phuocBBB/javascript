function a() {
    console.log('hi');
}

const wizard = {
    name: 'Merlin',
    health: 100,
    heal(...nums) {
        return this.health += nums.reduce((a,b) => a+b, 0);
    }
};

const archer = {
    name: 'Robin Hood',
    health: 30,
};

console.log(1, archer);
//Bind allow us to store function with parameters for later use
const healArcher = wizard.heal.bind(archer, 50, 30);
healArcher();
console.log(1, archer);