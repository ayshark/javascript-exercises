const removeFromArray = function(arr, ...args) {
    let arg = [...args];
    let result = arr.filter(x => !arg.includes(x));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
