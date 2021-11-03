class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} attack with ${this.weapon}`); 
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }

    printType() {
        console.log(this.type);
    }

}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }

    makeFort() {
        console.log('strongest fort in the world made'); 
    }
}

const dolby = new Elf('Dolby','cloth','house');
dolby.attack();
dolby.printType();

const shrek = new Ogre('Shrek','club','green');
shrek.attack();
shrek.makeFort();

console.log(dolby instanceof Elf);
console.log(dolby instanceof Character);