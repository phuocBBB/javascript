const a = (x,z) => x+z;


const obj = {
    player: 'booby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const {player, experience} = obj;
let {wizardLevel} = obj;

const name = 'john snow';
const obj = {
    [name]:'hello',
    [1+2]:'hihi'
}

