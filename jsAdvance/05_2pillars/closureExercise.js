//////////////////////////////////////////
//Excercise 1
let view;

const initialize = () => {
    console.log('view has been set!');

    return () => {
        view = 'something';
    };
}

const init = initialize();

init();
init();
console.log(view);

///////////////////////////////////////////
//Exercise 2
//solution 1
const array = [1,2,3,4];
for (let i=0; i<array.length; i++) { //replace var with let
    setTimeout(function() {
        console.log('I am at index ' + array[i]);
    }, 3000);
}

//solution 2
const array1 = [1,2,3,4];
for (let i=0; i<array1.length; i++) { //replace var with let
    (
        function (closureI) {
            setTimeout(function() {
                console.log('I am at index ' + array1[closureI]);
            }, 3000);
        }
    )(i);
}