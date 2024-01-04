const add = function(a, b) {
	return 0 + a + b;
};

const subtract = function(a,b) {
	return 0 + a - b;
};

const sum = function(arr) {
  return arr.reduce((total,current) => (total + current), 0)
};

const multiply = function(arr) {
  return arr.reduce((initial, total) => initial * total);
};

const power = function(int, power) {
  return int ** power;
};

const factorial = function(int) {
	const factor = [];
  if(int != 0){
    for(let i = 1; i <= int; i++){
      factor.push(i)
    }
  } else {
    return 1;
  }
  
  return factor.reduce((initial, total) => initial * total);
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
