const palindromes = function (string) {
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" "]/g;
    let lowerString = string.toLowerCase();
    let punctuationLess = lowerString.replace(regex, '');
    let simpleString = punctuationLess.replace(/\s{2,}/g," "); //replaces blank / space characters, couldn't figure out how to add into the regex variable
    console.log(simpleString);

    let splitString = simpleString.split("");
    let reversedArray = splitString.reverse();
    let reversedString = reversedArray.join("");
    console.log(reversedString);

    if (simpleString == reversedString) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
