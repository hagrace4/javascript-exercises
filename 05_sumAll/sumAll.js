const sumAll = function (numOne, numTwo) {
  let sum = 0;

  if ((numOne < 0 || numTwo < 0)) {
    return "ERROR";
  }
  if (typeof numOne !== 'number' || typeof numTwo !== 'number'){
    return "ERROR";
  }
   else {
    for (let i = Math.min(numOne, numTwo); i <= Math.max(numOne, numTwo); i++) {
      sum += i;
    }
  }
  return finalSum = sum;
};

// Do not edit below this line
module.exports = sumAll;
