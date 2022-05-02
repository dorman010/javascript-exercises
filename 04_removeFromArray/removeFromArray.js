const removeFromArray = function(...args) {
    const array = args[0];
    const filtArr = [];
    array.forEach((item) => {
    if (!args.includes(item)) {
        filtArr.push(item);
        console.log(filtArr);
    }
})
    return filtArr;
};

// Do not edit below this line
module.exports = removeFromArray;
