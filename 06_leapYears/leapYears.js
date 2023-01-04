const leapYears = function (year) {
  let yearDiv4 = year % 4;
  let yearDiv100 = year % 100;
  let yearDiv400 = year % 400;

  if (yearDiv400 === 0) {
    return true;
  }
  if (yearDiv100 == 0) {
    return false;
  }
  if (yearDiv4 == 0 ) {
    return true;
  }
  return false;

  // return Boolean;

};

// Do not edit below this line
module.exports = leapYears;
