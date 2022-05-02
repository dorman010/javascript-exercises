const sumAll = function(x, y) {
    var total = 0;
    if (x<0 || y < 0) {
        return 'ERROR';
    }
    else if (typeof x !== 'number' || typeof y !== 'number') {
        return 'ERROR';
    }
    else if(x > y){
        for(let i=y; i <= x; i++) {
            total +=i;
        }
    }
    else if (y > x) {
        for (let i=x; i<=y; i++) {
            total+=i;
        }
    }
    
return total;
};

// Do not edit below this line
module.exports = sumAll;
