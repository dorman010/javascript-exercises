const repeatString = function(string, times) {
    var repeatedString="";
    while (times > 0) {
        repeatedString+=string;
        times--
    }
    while (times < 0) {
        return 'ERROR'
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
