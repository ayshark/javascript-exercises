const sumAll = function(a, b) {
    if (typeof a != 'number' || typeof b != 'number' || a < 0 || b < 0) return "ERROR";
    let sum = 0;
    let upperLimit = a > b? a : b;
    let lowerLimit = upperLimit == a ? b : a;
    for (let i = lowerLimit; i <= upperLimit; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
