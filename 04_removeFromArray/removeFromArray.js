const removeFromArray = function(arr, ...args) {

    arr = arr.filter(el => el !== args);

    newArray = arr;
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
