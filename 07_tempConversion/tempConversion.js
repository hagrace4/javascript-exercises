// F = C * 1.8 + 32
const convertToCelsius = function(fVal) {
  let cVal = (fVal -32) / 1.8;
  cVal = cVal.toFixed(1);
  return Number(cVal);
};

// C = (F - 32) / 1.8
const convertToFahrenheit = function(cVal) {
  let fVal = ((cVal*1.8) +32);
  fVal = fVal.toFixed(1);
  return Number(fVal);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
