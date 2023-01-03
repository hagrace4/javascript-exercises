const removeFromArray = function(arr, ...args) {
    // Will only work with 2 arguments
    // arr = arr.filter(el => el !== args); 

    arr = arr.filter(el => !args.includes(el));

    newArray = arr;
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
