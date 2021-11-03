const myfunc = (...args) => {
    return args.filter(i => i===1);
}

console.log(myfunc(1,1,2,2));