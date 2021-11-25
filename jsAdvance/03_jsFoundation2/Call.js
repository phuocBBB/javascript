function a() {
    console.log('hi');
}

const wizard = {
    name: 'Merlin',
    health: 100,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
};

const archer = {
    name: 'Robin Hood',
    health: 30,
};

const health = wizard.heal(20,20);
console.log(health);

console.log(1, archer);
wizard.heal.call(archer, 50, 30);
console.log(1, archer);


