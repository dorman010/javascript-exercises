const ftoc = function(f) {
  const c = (f-32)*(5/9)
  const cround = Math.round(c*10)/10
  return cround
};

const ctof = function(c) {
  const f = (c*(9/5))+32
  const fround = Math.round(f*10)/10
  return fround
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
