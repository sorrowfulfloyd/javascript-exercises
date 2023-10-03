const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    s += a[i];
  }
  return s;

};

const multiply = function (a) {
  let s = 1;
  for (let i = 0; i < a.length; i++) {
    s = s * a[i];
  }
  return s;
};

const power = function (a, b) {
  x = a, s = 0;
  for (let i = 1; i < b; i++) {
    s = x * a;
    x = s;
  }
  return x;
};

const factorial = function (n) {
  if (n <= 1) return 1;
  let sum = 0, buff = n;
  sum = buff * (buff - 1); buff -= 2;
  for (x = n - 1; x > 1; x--) {
    sum = sum * buff;
    buff--;
  }
  return sum;
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
