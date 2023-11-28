const removeFromArray = function(array, ...args) {
    return array.filter(temp => !(args.includes(temp)));
};

// Do not edit below this line
module.exports = removeFromArray;
