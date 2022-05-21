const add = function(x, y) {
	let z = x+y;
  return z;
};

const subtract = function(x, y) {
  if (x >= y) {
    return x-y;
  }
  else if (y>x) {
    return y-x;
  }

};

const sum = function(arr) {
  return arr.reduce((a,b) => a+b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a*b);
};

const power = function(x, y) {
  return x**y;
};

const factorial = function(n) {
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }
  else{
    for (let i = n; i>=1; i--) {
      answer = answer*i;
  }
return answer;}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
 