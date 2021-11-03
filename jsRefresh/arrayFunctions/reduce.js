let array = [1,2,3,4,5];

let result = array.reduce( (accumulator, num) => {
    console.log(accumulator, num);
    return accumulator + num;
}, 0);

console.log(result);
