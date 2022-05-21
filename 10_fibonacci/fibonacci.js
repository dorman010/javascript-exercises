const fibonacci = function(n) {
    let x = 0;
    let y = 1;
    if (n < 0) {
        return 'OOPS';
    }
    else {
    for (let i = 0; i < n; i++) {
        
        nextInteger = x+y;
        x=y;
        y=nextInteger;
                
    }
    console.log(n);
    console.log(x);
    return x;}
};

// Do not edit below this line
module.exports = fibonacci;
